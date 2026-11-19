"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { countLineBreaks, removeLineBreaks } from "@/lib/textUtils";

const MODES = [
  { id: "all", label: "Remove all line breaks" },
  { id: "paragraphs", label: "Keep paragraphs" },
];

const SEPARATORS = [
  { id: "space", label: "Space", value: " " },
  { id: "comma", label: "Comma", value: ", " },
  { id: "none", label: "Nothing", value: "" },
];

const pillClass = (active) =>
  active
    ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
    : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md";

const LineBreakRemoverTool = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("all");
  const [separatorId, setSeparatorId] = useState("space");
  const [joinHyphenated, setJoinHyphenated] = useState(false);
  const [copied, setCopied] = useState(false);

  const separator = SEPARATORS.find((s) => s.id === separatorId).value;

  const output = useMemo(
    () =>
      removeLineBreaks(input, {
        keepParagraphs: mode === "paragraphs",
        separator,
        joinHyphenated,
      }),
    [input, mode, separator, joinHyphenated],
  );

  const removedCount = Math.max(0, countLineBreaks(input) - countLineBreaks(output));

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      {/* Options */}
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {MODES.map((m) => (
            <Button
              key={m.id}
              type="button"
              size="sm"
              variant={mode === m.id ? "default" : "outline"}
              onClick={() => setMode(m.id)}
              className={pillClass(mode === m.id)}
            >
              {m.label}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Replace with</span>
            {SEPARATORS.map((s) => (
              <Button
                key={s.id}
                type="button"
                size="sm"
                variant={separatorId === s.id ? "default" : "outline"}
                onClick={() => setSeparatorId(s.id)}
                className={pillClass(separatorId === s.id)}
              >
                {s.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="join-hyphenated"
              checked={joinHyphenated}
              onCheckedChange={setJoinHyphenated}
            />
            <Label
              htmlFor="join-hyphenated"
              className="cursor-pointer text-sm text-muted-foreground"
            >
              Fix words split by hyphens (PDFs)
            </Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ToolTextarea
          label="Text with Line Breaks"
          value={input}
          onChange={setInput}
          placeholder="Paste text from PDFs, emails, websites, or documents here..."
        />

        <ToolTextarea
          label={mode === "paragraphs" ? "Text with Paragraphs Kept" : "Single-Line Text"}
          value={output}
          readOnly
          placeholder="Cleaned text will appear here..."
        />
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        {input
          ? `${removedCount} line ${removedCount === 1 ? "break" : "breaks"} removed. Extra spaces at the start and end of each line are trimmed.`
          : "Choose an option above, then paste your text. Windows and Mac line endings are both handled."}
      </p>

      <ToolActions
        onClear={() => setInput("")}
        onCopy={handleCopy}
        disableCopy={!output}
        copied={copied}
      />
    </div>
  );
};

export default LineBreakRemoverTool;
