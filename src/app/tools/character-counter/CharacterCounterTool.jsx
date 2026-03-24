"use client";

import ToolActions from "@/app/components/tools/ToolActions";
import ToolStatsCard from "@/app/components/tools/ToolStatsCard";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { useState } from "react";

const CharacterCounterTool = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const characters = text?.length;
  const charactersNoSpaces = text?.replace(/\s/g, "").length;

  const handleClear = () => setText("");

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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
        copied={copied}
      />

      {/* Info */}
      <p className="text-sm text-muted-foreground">
        Words are counted based on spaces. Sentences are detected using
        punctuation.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <ToolStatsCard label="Characters (with spaces)" value={characters} />
        <ToolStatsCard
          label="Characters (no spaces)"
          value={charactersNoSpaces}
        />
      </div>
    </div>
  );
};

export default CharacterCounterTool;
