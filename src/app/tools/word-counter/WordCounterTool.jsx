"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolStatsCard from "@/app/components/tools/ToolStatsCard";
import { Label } from "@/components/ui/label";
import { getLimitStatus, getTextStats } from "@/lib/wordCountUtils";

const STORAGE_KEY = "toolzmint:word-counter";

const WordCounterTool = () => {
  const [text, setText] = useState("");
  const [limit, setLimit] = useState("");
  const [copied, setCopied] = useState(false);
  const hasRestored = useRef(false);

  // Restore the last draft so a refresh does not lose the user's essay.
  useEffect(() => {
    let saved = null;
    try {
      saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    } catch {}

    if (!saved) {
      hasRestored.current = true;
      return;
    }

    const restoreTimer = window.setTimeout(() => {
      setText(saved.text || "");
      setLimit(saved.limit || "");
      hasRestored.current = true;
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (!hasRestored.current) return;
    try {
      if (text || limit) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ text, limit }));
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {}
  }, [text, limit]);

  const stats = useMemo(() => getTextStats(text), [text]);
  const limitStatus = getLimitStatus(stats.words, Number(limit));

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

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <ToolStatsCard label="Words" value={stats.words} />
        <ToolStatsCard label="Characters" value={stats.characters} />
        <ToolStatsCard
          label="Characters (No Spaces)"
          value={stats.charactersNoSpaces}
        />
        <ToolStatsCard label="Sentences" value={stats.sentences} />
        <ToolStatsCard label="Paragraphs" value={stats.paragraphs} />
        <ToolStatsCard label="Reading Time" value={stats.readingTime} />
        <ToolStatsCard label="Speaking Time" value={stats.speakingTime} />
      </div>

      {/* Word limit */}
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <Label htmlFor="word-limit" className="text-sm font-medium">
            Word limit (optional)
          </Label>
          <input
            id="word-limit"
            type="number"
            min={1}
            inputMode="numeric"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            placeholder="e.g. 500"
            className="w-28 rounded-2xl bg-card px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          {limitStatus && (
            <p
              className={`text-sm font-medium ${limitStatus.isOver ? "text-red-500" : "text-muted-foreground"}`}
              aria-live="polite"
            >
              {stats.words} / {limit} words · {limitStatus.message}
            </p>
          )}
        </div>

        {limitStatus && (
          <div className="h-2 w-full overflow-hidden rounded-full bg-card">
            <div
              className={`h-full rounded-full transition-all ${limitStatus.isOver ? "bg-red-500" : "bg-primary"}`}
              style={{ width: `${limitStatus.percent}%` }}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <p className="text-sm text-muted-foreground">
        Your draft is saved only in this browser, so it is still here if you
        refresh. Clear removes it.
      </p>
    </div>
  );
};

export default WordCounterTool;
