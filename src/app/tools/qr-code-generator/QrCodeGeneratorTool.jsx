"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ERROR_LEVELS, generateQrDataUrl } from "@/lib/qrUtils";

const QrCodeGeneratorTool = () => {
  const [text, setText] = useState("");
  const [errorLevel, setErrorLevel] = useState("M");
  const [dataUrl, setDataUrl] = useState(null);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!text.trim()) {
      setDataUrl(null);
      setError(null);
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const url = await generateQrDataUrl(text, { errorLevel, size: 512 });
        setDataUrl(url);
        setError(null);
      } catch {
        setError("Could not generate QR code for this input.");
        setDataUrl(null);
      }
    }, 150);

    return () => clearTimeout(debounceRef.current);
  }, [text, errorLevel]);

  const handleDownload = () => {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qrcode.png";
    a.click();
  };

  const handleClear = () => {
    setText("");
    setDataUrl(null);
    setError(null);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Text or URL
          </p>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a URL, text, email, phone number, or any content..."
            rows={3}
            className="w-full resize-none rounded-2xl bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            Error correction:
          </span>
          {ERROR_LEVELS.map((lvl) => (
            <Button
              key={lvl.id}
              type="button"
              size="sm"
              variant={errorLevel === lvl.id ? "default" : "outline"}
              onClick={() => setErrorLevel(lvl.id)}
              className={
                errorLevel === lvl.id
                  ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                  : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
              }
            >
              {lvl.id} — {lvl.label}
            </Button>
          ))}
        </div>
      </div>

      {dataUrl && (
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-muted p-6 shadow-sm">
          <img
            src={dataUrl}
            alt="Generated QR Code"
            className="size-56 rounded-2xl bg-white shadow-md sm:size-72"
          />
          <p className="text-xs text-muted-foreground">
            {text.length} characters · Error correction {errorLevel}
          </p>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {text ? "QR code updates as you type." : "Enter text or a URL above to generate a QR code."}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClear}
            className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95"
          >
            Clear
          </Button>
          <Button
            size="sm"
            onClick={handleDownload}
            disabled={!dataUrl}
            className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Download PNG
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QrCodeGeneratorTool;
