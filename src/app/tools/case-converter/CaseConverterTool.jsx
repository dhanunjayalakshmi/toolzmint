"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toLowerCase, toTitleCase, toUpperCase } from "@/lib/textUtils";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import ToolActions from "@/app/components/tools/ToolActions";

export default function CaseConverterTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => setText("");

  return (
    <div className="w-full space-y-4">
      {/* Input */}
      <ToolTextarea
        label="Text"
        value={text}
        onChange={setText}
        placeholder="Type or paste your text here..."
      />

      {/* Modifier Actions */}
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          onClick={() => setText(toUpperCase(text))}
          className="rounded-full cursor-pointer shadow-sm transition-all hover:shadow-md active:scale-95"
        >
          UPPERCASE
        </Button>

        <Button
          size="sm"
          onClick={() => setText(toLowerCase(text))}
          className="rounded-full cursor-pointer shadow-sm transition-all hover:shadow-md active:scale-95"
        >
          lowercase
        </Button>

        <Button
          size="sm"
          onClick={() => setText(toTitleCase(text))}
          className="rounded-full cursor-pointer shadow-sm transition-all hover:shadow-md active:scale-95"
        >
          Title Case
        </Button>
      </div>

      {/* Utility Actions */}
      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!text}
        copied={copied}
      />
    </div>
  );
}
