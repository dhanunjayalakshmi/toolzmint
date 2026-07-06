"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BASES,
  getUpdatedValues,
  parseBase,
  sanitizeInput,
} from "@/lib/baseConverterUtils";

const EMPTY = { 2: "", 8: "", 10: "", 16: "" };

const NumberBaseConverterTool = () => {
  const [values, setValues] = useState(EMPTY);
  const [copied, setCopied] = useState(null);

  const handleChange = (base, raw) => {
    const sanitized = sanitizeInput(raw, base);
    setValues((prev) => getUpdatedValues(prev, base, sanitized));
  };

  const handleCopy = async (base) => {
    const text = values[base];
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(base);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleClear = () => {
    setValues(EMPTY);
    setCopied(null);
  };

  const hasAnyValue = Object.values(values).some(Boolean);

  return (
    <div className="w-full space-y-3">
      {BASES.map(({ base, label, name, placeholder }) => {
        const value = values[base];
        const isValid = !value || parseBase(value, base) !== null;
        const bitInfo =
          base === 2 && value ? `${value.replace(/^0+/, "").length || 1} bit${value.replace(/^0+/, "").length !== 1 ? "s" : ""}` : null;

        return (
          <div
            key={base}
            className="flex items-center gap-3 rounded-3xl bg-muted p-4 shadow-sm"
          >
            <div className="w-20 shrink-0">
              <p className="text-xs font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{name}</p>
            </div>

            <div className="flex-1 min-w-0">
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(base, e.target.value)}
                placeholder={placeholder}
                spellCheck={false}
                className={`w-full rounded-2xl bg-card px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  !isValid
                    ? "focus:ring-red-400/40"
                    : "focus:ring-primary/30"
                }`}
              />
              {bitInfo && (
                <p className="mt-1 pl-1 text-xs text-muted-foreground">
                  {bitInfo}
                </p>
              )}
            </div>

            <Button
              type="button"
              size="sm"
              onClick={() => handleCopy(base)}
              disabled={!value}
              className="shrink-0 cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied === base ? "copied" : "copy"}
            </Button>
          </div>
        );
      })}

      <div className="flex items-center justify-between pt-1">
        <p className="text-xs text-muted-foreground">
          Type in any field — all others update instantly.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleClear}
          disabled={!hasAnyValue}
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default NumberBaseConverterTool;
