"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  countWordFrequency,
  SORT_OPTIONS,
  wordsToCSV,
} from "@/lib/wordFrequencyUtils";

const WordFrequencyCounterTool = () => {
  const [text, setText] = useState("");
  const [sortBy, setSortBy] = useState("freq-desc");
  const [ignoreStopWords, setIgnoreStopWords] = useState(false);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [minLength, setMinLength] = useState(1);

  const { words, totalWords, uniqueWords } = useMemo(
    () => countWordFrequency(text, { caseSensitive, ignoreStopWords, minLength, sortBy }),
    [text, caseSensitive, ignoreStopWords, minLength, sortBy]
  );

  const handleDownload = () => {
    if (!words.length) return;
    const csv = wordsToCSV(words);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "word-frequency.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="w-full space-y-4">
      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your article, essay, speech, or any text here…"
        rows={7}
        className="w-full resize-none rounded-3xl bg-muted p-4 text-sm text-foreground placeholder:text-muted-foreground shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30"
      />

      {/* Options */}
      <div className="flex flex-wrap items-center gap-4 rounded-3xl bg-muted px-5 py-3 shadow-sm">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground shrink-0">Sort:</span>
          <div className="flex flex-wrap gap-1">
            {SORT_OPTIONS.map((o) => (
              <Button
                key={o.id}
                type="button"
                size="sm"
                variant={sortBy === o.id ? "default" : "outline"}
                onClick={() => setSortBy(o.id)}
                className={
                  sortBy === o.id
                    ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                    : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
                }
              >
                {o.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Min length */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground shrink-0">Min length:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((n) => (
              <Button
                key={n}
                type="button"
                size="sm"
                variant={minLength === n ? "default" : "outline"}
                onClick={() => setMinLength(n)}
                className={
                  minLength === n
                    ? "cursor-pointer rounded-full w-8 shadow-sm transition-all hover:shadow-md"
                    : "cursor-pointer rounded-full w-8 border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
                }
              >
                {n}
              </Button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Switch id="stopwords" checked={ignoreStopWords} onCheckedChange={setIgnoreStopWords} />
            <Label htmlFor="stopwords" className="cursor-pointer text-xs text-muted-foreground">
              Ignore stop words
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="case" checked={caseSensitive} onCheckedChange={setCaseSensitive} />
            <Label htmlFor="case" className="cursor-pointer text-xs text-muted-foreground">
              Case sensitive
            </Label>
          </div>
        </div>
      </div>

      {/* Stats */}
      {text.trim() && (
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Total words", value: totalWords },
            { label: "Unique words", value: uniqueWords },
            { label: "Top word", value: words[0]?.word ?? "—" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-2xl bg-muted px-4 py-2 shadow-sm text-center min-w-24 flex-1">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="mt-0.5 text-lg font-semibold truncate">{value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Table */}
      {words.length > 0 && (
        <>
          <div className="overflow-hidden rounded-3xl bg-muted shadow-sm">
            <div className="grid grid-cols-[1fr_auto_auto] gap-0">
              {/* Header */}
              <div className="col-span-3 grid grid-cols-[1fr_auto_auto] border-b border-border/40 px-5 py-2.5">
                <span className="text-xs font-semibold text-muted-foreground">Word</span>
                <span className="text-xs font-semibold text-muted-foreground text-right w-16">Count</span>
                <span className="text-xs font-semibold text-muted-foreground text-right w-16">%</span>
              </div>

              {/* Rows — cap at 200 for rendering performance */}
              <div className="col-span-3 max-h-80 overflow-y-auto divide-y divide-border/20">
                {words.slice(0, 200).map(({ word, count, pct }) => (
                  <div
                    key={word}
                    className="grid grid-cols-[1fr_auto_auto] items-center px-5 py-2 hover:bg-muted/80 transition-colors"
                  >
                    <span className="font-mono text-sm text-foreground truncate">{word}</span>
                    <span className="text-sm text-foreground text-right w-16 font-medium">{count}</span>
                    <span className="text-xs text-muted-foreground text-right w-16">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {words.length > 200 && (
            <p className="text-xs text-muted-foreground text-center">
              Showing top 200 of {words.length} unique words. Download CSV for the full list.
            </p>
          )}

          <div className="flex justify-end">
            <Button
              size="sm"
              onClick={handleDownload}
              className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95"
            >
              Download CSV
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default WordFrequencyCounterTool;
