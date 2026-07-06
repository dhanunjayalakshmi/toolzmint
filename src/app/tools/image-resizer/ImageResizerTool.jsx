"use client";

import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  dataUrlBytes,
  downloadAsZip,
  downloadDataUrl,
  FORMATS,
  formatBytes,
  loadImageMeta,
  resizeImage,
  resizeToTargetSize,
} from "@/lib/imageResizerUtils";

const MAX_IMAGES = 5;

function uid() {
  return Math.random().toString(36).slice(2);
}

// ─── Image Card ───────────────────────────────────────────────────────────────

const ImageCard = ({ image, format, onRemove, onDownload }) => {
  const ext = FORMATS.find((f) => f.id === format)?.ext ?? "jpg";
  const resultBytes = image.result ? dataUrlBytes(image.result.dataUrl) : 0;

  return (
    <div className="rounded-3xl bg-muted p-4 shadow-sm space-y-3">
      <div className="flex items-start gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt=""
          className="size-16 shrink-0 rounded-2xl object-cover bg-card shadow-sm"
        />
        <div className="min-w-0 flex-1 space-y-0.5">
          <p className="truncate text-sm font-medium">{image.name}</p>
          <p className="text-xs text-muted-foreground">
            {image.origWidth} × {image.origHeight} · {formatBytes(image.origSize)}
          </p>

          {image.status === "processing" && (
            <p className="text-xs text-primary">Resizing…</p>
          )}
          {image.status === "done" && image.result && (
            <p className="text-xs text-muted-foreground">
              → {image.result.width} × {image.result.height} · {formatBytes(resultBytes)}
            </p>
          )}
          {image.status === "error" && (
            <p className="text-xs text-red-500">{image.error}</p>
          )}
        </div>

        <button
          onClick={() => onRemove(image.id)}
          className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Remove"
        >
          ✕
        </button>
      </div>

      {image.status === "done" && image.result && (
        <Button
          size="sm"
          onClick={() => onDownload(image, ext)}
          className="w-full cursor-pointer rounded-2xl shadow-sm transition-all hover:shadow-md active:scale-95"
        >
          Download .{ext}
        </Button>
      )}
    </div>
  );
};

// ─── Main Tool ────────────────────────────────────────────────────────────────

const ImageResizerTool = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Resize mode
  const [resizeMode, setResizeMode] = useState("dimensions"); // "dimensions" | "filesize"

  // Dimensions mode
  const [targetWidth, setTargetWidth] = useState("");
  const [lockAspect, setLockAspect] = useState(true);
  const [targetHeight, setTargetHeight] = useState("");

  // File size mode
  const [targetSize, setTargetSize] = useState("");
  const [sizeUnit, setSizeUnit] = useState("KB");

  // Shared
  const [format, setFormat] = useState("image/jpeg");
  const [quality, setQuality] = useState(85);
  const [isZipping, setIsZipping] = useState(false);

  const fileRef = useRef(null);

  // ── File loading ─────────────────────────────────────────────────────────

  const addFiles = useCallback(async (files) => {
    const imageFiles = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, MAX_IMAGES);

    if (!imageFiles.length) return;

    const loaded = await Promise.all(
      imageFiles.map(async (file) => {
        const meta = await loadImageMeta(file);
        return {
          id: uid(),
          name: file.name,
          origSize: file.size,
          origWidth: meta.width,
          origHeight: meta.height,
          src: meta.src,
          status: "idle",
          result: null,
          error: null,
        };
      })
    );

    setImages((prev) => [...prev, ...loaded].slice(0, MAX_IMAGES));
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files?.length) addFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const handleRemove = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleClearAll = () => {
    setImages([]);
    if (fileRef.current) fileRef.current.value = "";
  };

  // ── Resize ───────────────────────────────────────────────────────────────

  const handleResizeAll = async () => {
    if (!images.length) return;

    setImages((prev) => prev.map((img) => ({ ...img, status: "processing", result: null, error: null })));

    const updated = await Promise.all(
      images.map(async (img) => {
        try {
          let result;

          if (resizeMode === "dimensions") {
            const w = Number(targetWidth);
            const h = lockAspect
              ? Math.round(w / (img.origWidth / img.origHeight))
              : Number(targetHeight);

            if (!w || w <= 0) throw new Error("Enter a valid width.");

            const dataUrl = await resizeImage(img.src, w, h, format, quality / 100);
            result = { dataUrl, width: w, height: h, format };

          } else {
            const num = parseFloat(targetSize);
            if (!num || num <= 0) throw new Error("Enter a valid target size.");
            const targetBytes = Math.round(num * (sizeUnit === "MB" ? 1024 * 1024 : 1024));
            const out = await resizeToTargetSize(img.src, img.origWidth, img.origHeight, format, targetBytes);
            if (!out) throw new Error("Target size too small to achieve.");
            result = { ...out, format };
          }

          return { ...img, status: "done", result, error: null };
        } catch (err) {
          return { ...img, status: "error", result: null, error: err.message };
        }
      })
    );

    setImages(updated);
  };

  // ── Download ─────────────────────────────────────────────────────────────

  const handleDownloadOne = (image, ext) => {
    if (!image.result) return;
    const base = image.name.replace(/\.[^.]+$/, "");
    downloadDataUrl(image.result.dataUrl, `${base}-resized.${ext}`);
  };

  const handleDownloadZip = async () => {
    setIsZipping(true);
    try {
      await downloadAsZip(images);
    } finally {
      setIsZipping(false);
    }
  };

  // ── Derived state ─────────────────────────────────────────────────────────

  const hasResults = images.some((img) => img.status === "done");
  const allDone = images.length > 0 && images.every((img) => img.status === "done" || img.status === "error");
  const showQuality = resizeMode === "dimensions" && (format === "image/jpeg" || format === "image/webp");
  const canResize =
    images.length > 0 &&
    (resizeMode === "dimensions" ? !!targetWidth : !!targetSize);

  return (
    <div className="w-full space-y-4">
      {/* Drop zone */}
      {images.length < MAX_IMAGES && (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed p-10 text-center transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-border bg-muted hover:border-primary/50"
          }`}
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-background shadow-sm">
            <svg className="size-6 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">
              {images.length === 0 ? "Drop images here or click to upload" : `Add more images (${images.length}/${MAX_IMAGES})`}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">PNG, JPEG, WebP · up to {MAX_IMAGES} images</p>
          </div>
        </div>
      )}

      <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />

      {/* Settings */}
      {images.length > 0 && (
        <div className="rounded-3xl bg-muted p-5 shadow-sm space-y-4">
          {/* Mode toggle */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "dimensions", label: "By dimensions" },
              { id: "filesize",   label: "By file size"  },
            ].map((m) => (
              <Button
                key={m.id}
                type="button"
                size="sm"
                variant={resizeMode === m.id ? "default" : "outline"}
                onClick={() => setResizeMode(m.id)}
                className={
                  resizeMode === m.id
                    ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                    : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
                }
              >
                {m.label}
              </Button>
            ))}
          </div>

          {/* Dimension inputs */}
          {resizeMode === "dimensions" && (
            <div className="flex flex-wrap items-end gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Width (px)</Label>
                <input
                  type="number"
                  min={1}
                  value={targetWidth}
                  onChange={(e) => setTargetWidth(e.target.value)}
                  placeholder="e.g. 800"
                  className="w-28 rounded-2xl bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="flex items-center gap-2 pb-1">
                <Switch id="lock" checked={lockAspect} onCheckedChange={setLockAspect} />
                <Label htmlFor="lock" className="cursor-pointer text-xs text-muted-foreground">
                  Lock ratio
                </Label>
              </div>

              {!lockAspect && (
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Height (px)</Label>
                  <input
                    type="number"
                    min={1}
                    value={targetHeight}
                    onChange={(e) => setTargetHeight(e.target.value)}
                    placeholder="e.g. 600"
                    className="w-28 rounded-2xl bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              )}

              {lockAspect && (
                <p className="text-xs text-muted-foreground pb-1">
                  Height auto-calculated per image
                </p>
              )}
            </div>
          )}

          {/* File size inputs */}
          {resizeMode === "filesize" && (
            <div className="flex items-end gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Target size</Label>
                <input
                  type="number"
                  min={1}
                  value={targetSize}
                  onChange={(e) => setTargetSize(e.target.value)}
                  placeholder="e.g. 200"
                  className="w-28 rounded-2xl bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex gap-1 pb-1">
                {["KB", "MB"].map((u) => (
                  <Button
                    key={u}
                    type="button"
                    size="sm"
                    variant={sizeUnit === u ? "default" : "outline"}
                    onClick={() => setSizeUnit(u)}
                    className={
                      sizeUnit === u
                        ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                        : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
                    }
                  >
                    {u}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground pb-2">
                Output size will be at or below target
              </p>
            </div>
          )}

          {/* Format */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">Format:</span>
            {FORMATS.map((f) => (
              <Button
                key={f.id}
                type="button"
                size="sm"
                variant={format === f.id ? "default" : "outline"}
                onClick={() => setFormat(f.id)}
                className={
                  format === f.id
                    ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                    : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
                }
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* Quality */}
          {showQuality && (
            <div className="flex items-center gap-4">
              <span className="shrink-0 text-xs font-medium text-muted-foreground">
                Quality: {quality}%
              </span>
              <input
                type="range"
                min={10}
                max={100}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="flex-1 accent-primary"
              />
            </div>
          )}
        </div>
      )}

      {/* Image cards */}
      {images.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <ImageCard
              key={img.id}
              image={img}
              format={format}
              onRemove={handleRemove}
              onDownload={handleDownloadOne}
            />
          ))}
        </div>
      )}

      {/* Actions */}
      {images.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearAll}
            className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95"
          >
            Clear all
          </Button>

          <div className="flex flex-wrap gap-2">
          {hasResults && images.length > 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadZip}
              disabled={isZipping || !allDone}
              className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
            >
              {isZipping ? "Zipping…" : "Download all as ZIP"}
            </Button>
          )}
          <Button
            size="sm"
            onClick={handleResizeAll}
            disabled={!canResize}
            className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Resize {images.length > 1 ? `all ${images.length}` : "image"}
          </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageResizerTool;
