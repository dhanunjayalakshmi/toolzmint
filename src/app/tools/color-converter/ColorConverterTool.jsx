"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  formatHex,
  formatHsl,
  formatRgb,
  parseColor,
  rgbToHsl,
} from "@/lib/colorUtils";

const FORMAT_HINTS = {
  hex: "#RRGGBB or #RGB",
  rgb: "rgb(R, G, B) or R, G, B",
  hsl: "hsl(H, S%, L%) or H S% L%",
};

const ColorConverterTool = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(null);

  const parsed = useMemo(() => {
    if (!input.trim()) return null;
    return parseColor(input);
  }, [input]);

  const outputs = useMemo(() => {
    if (!parsed) return null;
    const { rgb } = parsed;
    const hsl = rgbToHsl(rgb);
    return {
      hex: formatHex(rgb),
      rgb: formatRgb(rgb),
      hsl: formatHsl(hsl),
    };
  }, [parsed]);

  const handleCopy = async (key) => {
    if (!outputs?.[key]) return;
    await navigator.clipboard.writeText(outputs[key]);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleClear = () => {
    setInput("");
  };

  const isInvalid = input.trim() && !parsed;

  return (
    <div className="w-full space-y-4">
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Color Input
          </p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a color: #ff5733, rgb(255,87,51), hsl(11,100%,60%)"
            className={`w-full rounded-2xl bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 ${isInvalid ? "focus:ring-red-400/40" : "focus:ring-primary/30"}`}
          />
        </div>

        <p className="text-xs text-muted-foreground">
          Accepts:{" "}
          {Object.values(FORMAT_HINTS).join(" · ")}
        </p>
      </div>

      {parsed && outputs && (
        <>
          <div className="flex items-center gap-4 rounded-3xl bg-muted p-4 shadow-sm">
            <div
              className="size-14 shrink-0 rounded-2xl shadow-md"
              style={{ backgroundColor: outputs.hex }}
            />
            <div>
              <p className="text-sm font-medium">
                Detected as {parsed.format.toUpperCase()}
              </p>
              <p className="text-xs text-muted-foreground">
                All formats updated below
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { key: "hex", label: "HEX" },
              { key: "rgb", label: "RGB" },
              { key: "hsl", label: "HSL" },
            ].map(({ key, label }) => (
              <div
                key={key}
                className="flex items-center gap-3 rounded-3xl bg-muted p-4 shadow-sm"
              >
                <span className="w-10 shrink-0 text-xs font-semibold text-muted-foreground">
                  {label}
                </span>
                <span className="flex-1 font-mono text-sm text-foreground">
                  {outputs[key]}
                </span>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => handleCopy(key)}
                  className="shrink-0 cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md active:scale-95"
                >
                  {copied === key ? "copied" : "copy"}
                </Button>
              </div>
            ))}
          </div>
        </>
      )}

      {isInvalid && (
        <p className="text-sm text-red-500">
          Could not parse color. Try a format like #ff5733, rgb(255, 87, 51), or
          hsl(11, 100%, 60%).
        </p>
      )}

      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleClear}
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default ColorConverterTool;
