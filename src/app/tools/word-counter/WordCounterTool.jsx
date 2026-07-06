"use client";

import { useCallback, useMemo, useState } from "react";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolStatsCard from "@/app/components/tools/ToolStatsCard";

const WordCounterTool = () => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const { words, characters, charactersNoSpaces, sentences, paragraphs, readingTimeMinutes } =
    useMemo(() => {
      const w = text.trim() ? text.trim().split(/\s+/).length : 0;
      return {
        words: w,
        characters: text.length,
        charactersNoSpaces: text.replace(/\s/g, "").length,
        sentences: text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0,
        paragraphs: text.trim()
          ? text.split(/\n\s*\n/).filter((p) => p.trim()).length
          : 0,
        readingTimeMinutes:
          w === 0 ? "0 min" : w < 200 ? "< 1 min" : `${Math.ceil(w / 200)} min`,
      };
    }, [text]);

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
        placeholder="Paste your essay, article, message, or caption here..."
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
        See live counts for words, characters, sentences, paragraphs, and
        estimated reading time as you type.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        <ToolStatsCard label="Words" value={words} />
        <ToolStatsCard label="Characters" value={characters} />
        <ToolStatsCard
          label="Characters (No Spaces)"
          value={charactersNoSpaces}
        />
        <ToolStatsCard label="Sentences" value={sentences} />
        <ToolStatsCard label="Paragraphs" value={paragraphs} />
        <ToolStatsCard label="Reading Time" value={readingTimeMinutes} />
      </div>
    </div>
  );
};

export default WordCounterTool;
