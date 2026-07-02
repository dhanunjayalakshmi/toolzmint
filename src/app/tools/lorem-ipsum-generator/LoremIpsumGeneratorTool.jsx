"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import {
  generateParagraphs,
  generateSentences,
  generateWords,
} from "@/lib/loremUtils";

const MODES = [
  { id: "paragraphs", label: "Paragraphs", max: 10 },
  { id: "sentences", label: "Sentences", max: 20 },
  { id: "words", label: "Words", max: 200 },
];

const DEFAULTS = { paragraphs: 3, sentences: 5, words: 50 };

const LoremIpsumGeneratorTool = () => {
  const [mode, setMode] = useState("paragraphs");
  const [counts, setCounts] = useState(DEFAULTS);
  const [copied, setCopied] = useState(false);

  const currentMode = MODES.find((m) => m.id === mode);
  const count = counts[mode];

  const output = useMemo(() => {
    if (mode === "paragraphs") return generateParagraphs(count);
    if (mode === "sentences") return generateSentences(count);
    return generateWords(count);
  }, [mode, count]);

  const handleCountChange = (delta) => {
    setCounts((prev) => ({
      ...prev,
      [mode]: Math.min(currentMode.max, Math.max(1, prev[mode] + delta)),
    }));
  };

  const handleClear = () => setCounts(DEFAULTS);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {MODES.map((m) => (
              <Button
                key={m.id}
                type="button"
                size="sm"
                variant={mode === m.id ? "default" : "outline"}
                onClick={() => setMode(m.id)}
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

          <div className="ml-auto flex items-center gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => handleCountChange(-1)}
              disabled={count <= 1}
              className="size-8 cursor-pointer rounded-full border-0 bg-card p-0 shadow-sm transition-all hover:bg-background/90 hover:shadow-md disabled:opacity-40"
            >
              −
            </Button>
            <span className="w-8 text-center text-sm font-medium tabular-nums">
              {count}
            </span>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => handleCountChange(1)}
              disabled={count >= currentMode.max}
              className="size-8 cursor-pointer rounded-full border-0 bg-card p-0 shadow-sm transition-all hover:bg-background/90 hover:shadow-md disabled:opacity-40"
            >
              +
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Generating {count} {mode} of standard lorem ipsum placeholder text.
        </p>
      </div>

      <ToolTextarea
        label="Generated Text"
        value={output}
        readOnly
        placeholder="Generated lorem ipsum text will appear here..."
      />

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
        copied={copied}
      />
    </div>
  );
};

export default LoremIpsumGeneratorTool;
