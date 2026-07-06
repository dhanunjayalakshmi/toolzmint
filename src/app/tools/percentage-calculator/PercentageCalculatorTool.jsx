"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { calculate, MODES } from "@/lib/percentageUtils";

const InlineInput = ({ value, onChange, placeholder }) => (
  <input
    type="number"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="mx-1 inline-block w-28 rounded-xl bg-card px-3 py-1.5 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
  />
);

const PercentageCalculatorTool = () => {
  const [mode, setMode] = useState("of");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [direction, setDirection] = useState("increase");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => calculate(mode, a, b, direction), [mode, a, b, direction]);

  const resultText = useMemo(() => {
    if (!result) return null;
    if (result.signed && result.value > 0) return `+${result.value}${result.unit}`;
    return `${result.value}${result.unit}`;
  }, [result]);

  const isIncrease = result?.signed && result?.value >= 0;
  const isDecrease = result?.signed && result?.value < 0;

  const handleCopy = async () => {
    if (!resultText) return;
    await navigator.clipboard.writeText(resultText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setA("");
    setB("");
  };

  return (
    <div className="w-full space-y-4">
      {/* Mode selector */}
      <div className="flex flex-wrap gap-2 rounded-3xl bg-muted p-4 shadow-sm">
        {MODES.map((m) => (
          <Button
            key={m.id}
            type="button"
            size="sm"
            variant={mode === m.id ? "default" : "outline"}
            onClick={() => { setMode(m.id); handleClear(); }}
            className={
              mode === m.id
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
            }
          >
            {m.label}
          </Button>
        ))}
      </div>

      {/* Question */}
      <div className="rounded-3xl bg-muted p-5 shadow-sm">
        <p className="text-sm font-medium text-muted-foreground mb-3">Calculate</p>

        <div className="flex flex-wrap items-center gap-y-3 text-sm text-foreground leading-loose">
          {mode === "of" && (
            <>
              <span>What is</span>
              <InlineInput value={a} onChange={setA} placeholder="%" />
              <span>% of</span>
              <InlineInput value={b} onChange={setB} placeholder="number" />
              <span>?</span>
            </>
          )}

          {mode === "is" && (
            <>
              <InlineInput value={a} onChange={setA} placeholder="number" />
              <span>is what percent of</span>
              <InlineInput value={b} onChange={setB} placeholder="number" />
              <span>?</span>
            </>
          )}

          {mode === "change" && (
            <>
              <span>Percentage change from</span>
              <InlineInput value={a} onChange={setA} placeholder="original" />
              <span>to</span>
              <InlineInput value={b} onChange={setB} placeholder="new value" />
              <span>?</span>
            </>
          )}

          {mode === "adjust" && (
            <>
              <InlineInput value={a} onChange={setA} placeholder="number" />
              <div className="mx-1 flex gap-1">
                {["increase", "decrease"].map((d) => (
                  <Button
                    key={d}
                    type="button"
                    size="sm"
                    variant={direction === d ? "default" : "outline"}
                    onClick={() => setDirection(d)}
                    className={
                      direction === d
                        ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                        : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
                    }
                  >
                    {d}d
                  </Button>
                ))}
              </div>
              <span>by</span>
              <InlineInput value={b} onChange={setB} placeholder="%" />
              <span>%</span>
            </>
          )}
        </div>
      </div>

      {/* Result */}
      {resultText !== null ? (
        <div
          className={`rounded-3xl p-5 shadow-sm ${
            isIncrease ? "bg-green-500/10" : isDecrease ? "bg-red-500/10" : "bg-card"
          }`}
        >
          <p className="text-sm font-medium text-muted-foreground">Result</p>
          <p
            className={`mt-1 text-4xl font-semibold tracking-tight ${
              isIncrease
                ? "text-green-700 dark:text-green-400"
                : isDecrease
                ? "text-red-600 dark:text-red-400"
                : ""
            }`}
          >
            {resultText}
          </p>
        </div>
      ) : (a || b) ? (
        <p className="text-sm text-muted-foreground px-1">
          Enter valid numbers in both fields to see the result.
        </p>
      ) : null}

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">Result updates as you type.</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClear}
            disabled={!a && !b}
            className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
          >
            Clear
          </Button>
          <Button
            size="sm"
            onClick={handleCopy}
            disabled={!resultText}
            className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? "copied" : "copy"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculatorTool;
