"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  dataUrlBytes,
  downloadDataUrl,
  FORMATS,
  formatBytes,
  loadImageMeta,
  resizeImage,
} from "@/lib/imageResizerUtils";

const ImageResizerTool = () => {
  const [original, setOriginal] = useState(null); // { src, width, height, name, size }
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lockAspect, setLockAspect] = useState(true);
  const [format, setFormat] = useState("image/png");
  const [quality, setQuality] = useState(85);
  const [resizedUrl, setResizedUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const debounceRef = useRef(null);
  const fileRef = useRef(null);

  const aspectRatio = original ? original.width / original.height : 1;

  const loadFile = useCallback(async (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const meta = await loadImageMeta(file);
    setOriginal({ ...meta, name: file.name, size: file.size });
    setWidth(String(meta.width));
    setHeight(String(meta.height));
    setResizedUrl(null);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) loadFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) loadFile(file);
  };

  const handleWidthChange = (val) => {
    setWidth(val);
    if (lockAspect && val) {
      setHeight(String(Math.round(Number(val) / aspectRatio)));
    }
  };

  const handleHeightChange = (val) => {
    setHeight(val);
    if (lockAspect && val) {
      setWidth(String(Math.round(Number(val) * aspectRatio)));
    }
  };

  // Regenerate resized image when settings change
  useEffect(() => {
    if (!original || !width || !height || Number(width) <= 0 || Number(height) <= 0) return;
    clearTimeout(debounceRef.current);
    setIsResizing(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const url = await resizeImage(original.src, Number(width), Number(height), format, quality / 100);
        setResizedUrl(url);
      } finally {
        setIsResizing(false);
      }
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [original, width, height, format, quality]);

  const handleDownload = () => {
    if (!resizedUrl || !original) return;
    const ext = FORMATS.find((f) => f.id === format)?.ext ?? "png";
    const base = original.name.replace(/\.[^.]+$/, "");
    downloadDataUrl(resizedUrl, `${base}-${width}x${height}.${ext}`);
  };

  const handleReset = () => {
    setOriginal(null);
    setResizedUrl(null);
    setWidth("");
    setHeight("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const resizedBytes = resizedUrl ? dataUrlBytes(resizedUrl) : 0;
  const showQuality = format === "image/jpeg" || format === "image/webp";

  return (
    <div className="w-full space-y-4">
      {/* Drop zone */}
      {!original && (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed p-12 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border bg-muted hover:border-primary/50"
          }`}
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-background shadow-sm">
            <svg className="size-6 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Drop an image here or click to upload</p>
            <p className="mt-1 text-xs text-muted-foreground">PNG, JPEG, WebP supported</p>
          </div>
        </div>
      )}

      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

      {/* Settings */}
      {original && (
        <>
          <div className="rounded-3xl bg-muted p-4 shadow-sm space-y-4">
            {/* Original info */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium truncate max-w-xs">{original.name}</p>
                <p className="text-xs text-muted-foreground">
                  {original.width} × {original.height} px · {formatBytes(original.size)}
                </p>
              </div>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={handleReset}
                className="shrink-0 rounded-full border-0 bg-card shadow-sm cursor-pointer transition-all hover:bg-background/90 hover:shadow-md"
              >
                Change image
              </Button>
            </div>

            {/* Dimensions */}
            <div className="flex flex-wrap items-end gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Width (px)</Label>
                <input
                  type="number"
                  value={width}
                  min={1}
                  onChange={(e) => handleWidthChange(e.target.value)}
                  className="w-28 rounded-2xl bg-card px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="flex items-center gap-1.5 pb-2">
                <Switch id="lock" checked={lockAspect} onCheckedChange={setLockAspect} />
                <Label htmlFor="lock" className="cursor-pointer text-xs text-muted-foreground">
                  Lock ratio
                </Label>
              </div>

              <div className="space-y-1">
                <Label className="text-xs text-muted-foreground">Height (px)</Label>
                <input
                  type="number"
                  value={height}
                  min={1}
                  onChange={(e) => handleHeightChange(e.target.value)}
                  className="w-28 rounded-2xl bg-card px-3 py-2 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

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
                <span className="text-xs font-medium text-muted-foreground shrink-0">
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

          {/* Preview */}
          {resizedUrl && (
            <div className="rounded-3xl bg-muted p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Preview</p>
                <p className="text-xs text-muted-foreground">
                  {width} × {height} px · {formatBytes(resizedBytes)}
                  {isResizing && " · updating..."}
                </p>
              </div>
              {/* Checkerboard bg for transparency */}
              <div className="flex justify-center rounded-2xl overflow-hidden bg-[size:16px_16px] bg-[image:linear-gradient(45deg,#e5e7eb_25%,transparent_25%),linear-gradient(-45deg,#e5e7eb_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e5e7eb_75%),linear-gradient(-45deg,transparent_75%,#e5e7eb_75%)] bg-[position:0_0,0_8px,8px_-8px,-8px_0]">
                <img
                  src={resizedUrl}
                  alt="Resized preview"
                  className="max-h-72 max-w-full object-contain"
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end">
            <Button
              size="sm"
              onClick={handleDownload}
              disabled={!resizedUrl || isResizing}
              className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Download image
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageResizerTool;
