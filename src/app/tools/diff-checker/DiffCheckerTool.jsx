"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { computeDiff } from "@/lib/diffUtils";

const LINE_STYLES = {
  added: {
    row: "bg-green-500/10 border-l-2 border-green-500",
    prefix: "text-green-600 dark:text-green-400 select-none w-5 shrink-0",
    prefixChar: "+",
  },
  removed: {
    row: "bg-red-500/10 border-l-2 border-red-500",
    prefix: "text-red-500 dark:text-red-400 select-none w-5 shrink-0",
    prefixChar: "−",
  },
  unchanged: {
    row: "",
    prefix: "text-muted-foreground/40 select-none w-5 shrink-0",
    prefixChar: " ",
  },
};

const DiffCheckerTool = () => {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");

  const hasBothInputs = original !== "" || modified !== "";

  const [debouncedOriginal, setDebouncedOriginal] = useState("");
  const [debouncedModified, setDebouncedModified] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedOriginal(original);
      setDebouncedModified(modified);
    }, 300);
    return () => clearTimeout(t);
  }, [original, modified]);

  const { lines, stats } = useMemo(
    () =>
      debouncedOriginal || debouncedModified
        ? computeDiff(debouncedOriginal, debouncedModified)
        : { lines: [], stats: null },
    [debouncedOriginal, debouncedModified]
  );

  const handleClear = () => {
    setOriginal("");
    setModified("");
  };

  const hasChanges = stats && (stats.added > 0 || stats.removed > 0);

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Original</p>
          <textarea
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            placeholder="Paste the original text here..."
            rows={10}
            className="w-full resize-none rounded-3xl bg-muted p-4 text-sm text-foreground placeholder:text-muted-foreground shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Modified</p>
          <textarea
            value={modified}
            onChange={(e) => setModified(e.target.value)}
            placeholder="Paste the modified text here..."
            rows={10}
            className="w-full resize-none rounded-3xl bg-muted p-4 text-sm text-foreground placeholder:text-muted-foreground shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
          />
        </div>
      </div>

      {hasBothInputs && (
        <>
          {stats && (
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-green-500/10 p-4 shadow-sm">
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  Lines added
                </p>
                <p className="mt-1 text-2xl font-semibold text-green-700 dark:text-green-400">
                  +{stats.added}
                </p>
              </div>
              <div className="rounded-3xl bg-red-500/10 p-4 shadow-sm">
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  Lines removed
                </p>
                <p className="mt-1 text-2xl font-semibold text-red-600 dark:text-red-400">
                  −{stats.removed}
                </p>
              </div>
              <div className="rounded-3xl bg-card p-4 shadow-sm">
                <p className="text-sm font-medium text-muted-foreground">
                  Unchanged
                </p>
                <p className="mt-1 text-2xl font-semibold">{stats.unchanged}</p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {hasChanges ? "Diff result" : "No differences found"}
            </p>

            {lines.length > 0 && (
              <div className="overflow-auto rounded-3xl bg-muted p-4 shadow-inner max-h-[480px]">
                <pre className="font-mono text-xs leading-6">
                  {lines.map((line, i) => {
                    const s = LINE_STYLES[line.type];
                    return (
                      <div key={i} className={`flex gap-2 px-2 rounded ${s.row}`}>
                        <span className={s.prefix}>{s.prefixChar}</span>
                        <span className="min-w-0 break-all whitespace-pre-wrap">
                          {line.text || " "}
                        </span>
                      </div>
                    );
                  })}
                </pre>
              </div>
            )}
          </div>
        </>
      )}

      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleClear}
          disabled={!hasBothInputs}
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default DiffCheckerTool;
