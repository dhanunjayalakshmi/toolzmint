"use client";

import { useState } from "react";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolStatsCard from "@/app/components/tools/ToolStatsCard";

const WordCounterTool = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter(Boolean).length
    : 0;

  const handleClear = () => setText("");

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full space-y-4">
      {/* Input */}
      <ToolTextarea
        value={text}
        onChange={setText}
        placeholder="Enter text..."
      />

      {/* Actions */}
      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!text}
      />

      {/* Info */}
      <p className="text-sm text-muted-foreground">
        Words are counted based on spaces. Sentences are detected using
        punctuation.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <ToolStatsCard label="Words" value={words} />
        <ToolStatsCard label="Characters" value={characters} />
        <ToolStatsCard label="Sentences" value={sentences} />
      </div>
    </div>
  );
};

export default WordCounterTool;
