"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toLowerCase, toTitleCase, toUpperCase } from "@/lib/textUtils";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import ToolActions from "@/app/components/tools/ToolActions";

const MODE_UPPERCASE = "uppercase";
const MODE_LOWERCASE = "lowercase";
const MODE_TITLE_CASE = "title-case";

export default function CaseConverterTool() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState(MODE_UPPERCASE);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    if (!text) return "";

    switch (mode) {
      case MODE_LOWERCASE:
        return toLowerCase(text);
      case MODE_TITLE_CASE:
        return toTitleCase(text);
      default:
        return toUpperCase(text);
    }
  }, [mode, text]);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => setText("");

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ToolTextarea
          label="Original Text"
          value={text}
          onChange={setText}
          placeholder="Type or paste text you want to convert..."
        />

        <ToolTextarea
          label="Converted Text"
          value={output}
          readOnly
          placeholder="Converted text will appear here..."
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Convert your text to uppercase, lowercase, or title case instantly without changing the original input.
      </p>

      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          onClick={() => setMode(MODE_UPPERCASE)}
          variant={mode === MODE_UPPERCASE ? "default" : "outline"}
          className={
            mode === MODE_UPPERCASE
              ? "rounded-full cursor-pointer shadow-sm transition-all hover:shadow-md active:scale-95"
              : "rounded-full cursor-pointer border-0 bg-card shadow-sm transition-all hover:shadow-md active:scale-95"
          }
        >
          UPPERCASE
        </Button>

        <Button
          size="sm"
          onClick={() => setMode(MODE_LOWERCASE)}
          variant={mode === MODE_LOWERCASE ? "default" : "outline"}
          className={
            mode === MODE_LOWERCASE
              ? "rounded-full cursor-pointer shadow-sm transition-all hover:shadow-md active:scale-95"
              : "rounded-full cursor-pointer border-0 bg-card shadow-sm transition-all hover:shadow-md active:scale-95"
          }
        >
          lowercase
        </Button>

        <Button
          size="sm"
          onClick={() => setMode(MODE_TITLE_CASE)}
          variant={mode === MODE_TITLE_CASE ? "default" : "outline"}
          className={
            mode === MODE_TITLE_CASE
              ? "rounded-full cursor-pointer shadow-sm transition-all hover:shadow-md active:scale-95"
              : "rounded-full cursor-pointer border-0 bg-card shadow-sm transition-all hover:shadow-md active:scale-95"
          }
        >
          Title Case
        </Button>
      </div>

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
        copied={copied}
      />
    </div>
  );
}
