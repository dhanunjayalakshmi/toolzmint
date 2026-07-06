"use client";

import ToolActions from "@/app/components/tools/ToolActions";
import ToolStatsCard from "@/app/components/tools/ToolStatsCard";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { useCallback, useMemo, useState } from "react";

const CharacterCounterTool = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const { characters, charactersNoSpaces, lines } = useMemo(() => ({
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, "").length,
    lines: text ? text.split("\n").length : 0,
  }), [text]);

  const handleClear = useCallback(() => setText(""), []);

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
        placeholder="Paste or type your text here..."
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
        Count characters with spaces, without spaces, and by line while you type.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ToolStatsCard label="Characters (with spaces)" value={characters} />
        <ToolStatsCard
          label="Characters (no spaces)"
          value={charactersNoSpaces}
        />
        <ToolStatsCard label="Lines" value={lines} />
      </div>
    </div>
  );
};

export default CharacterCounterTool;
