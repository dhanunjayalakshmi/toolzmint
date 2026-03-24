"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toLowerCase, toTitleCase, toUpperCase } from "@/lib/textUtils";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import ToolActions from "@/app/components/tools/ToolActions";

export default function CaseConverterTool() {
  const [text, setText] = useState("");

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  };

  const handleClear = () => setText("");

  return (
    <>
      {/* Input */}
      <ToolTextarea
        label="Text"
        value={text}
        onChange={setText}
        placeholder="Type or paste your text here..."
      />

      {/* Modifier Actions */}
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={() => setText(toUpperCase(text))}>
          UPPERCASE
        </Button>

        <Button size="sm" onClick={() => setText(toLowerCase(text))}>
          lowercase
        </Button>

        <Button size="sm" onClick={() => setText(toTitleCase(text))}>
          Title Case
        </Button>
      </div>

      {/* Utility Actions */}
      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!text}
      />
    </>
  );
}
