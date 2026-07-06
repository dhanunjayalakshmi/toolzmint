"use client";

import { useMemo, useState } from "react";
import { FLAGS, testRegex } from "@/lib/regexUtils";

const RegexTesterTool = () => {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");

  const toggleFlag = (flag) => {
    setFlags((prev) =>
      prev.includes(flag) ? prev.replace(flag, "") : prev + flag
    );
  };

  const { matches, error, segments } = useMemo(
    () => testRegex(pattern, flags, testString),
    [pattern, flags, testString]
  );

  const hasNamedGroups =
    matches.length > 0 && Object.keys(matches[0]?.groups ?? {}).length > 0;

  return (
    <div className="w-full space-y-4">
      {/* Pattern row */}
      <div className="flex items-center gap-2 rounded-3xl bg-muted px-4 py-3 shadow-sm">
        <span className="shrink-0 font-mono text-muted-foreground text-sm select-none">/</span>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Your regex pattern…"
          spellCheck={false}
          className="flex-1 min-w-0 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <span className="shrink-0 font-mono text-muted-foreground text-sm select-none">/</span>

        {/* Flag toggles */}
        <div className="flex gap-1 ml-1">
          {FLAGS.map((f) => (
            <button
              key={f.id}
              type="button"
              title={f.title}
              onClick={() => toggleFlag(f.id)}
              className={`w-7 h-7 rounded-full font-mono text-xs font-semibold transition-colors cursor-pointer ${
                flags.includes(f.id)
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="rounded-2xl bg-red-500/10 px-4 py-2 text-sm text-red-500">
          Invalid pattern: {error}
        </p>
      )}

      {/* Test string */}
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground px-1">Test string</p>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Paste or type the text you want to test against…"
          rows={5}
          spellCheck={false}
          className="w-full resize-none rounded-3xl bg-muted p-4 font-mono text-sm text-foreground placeholder:text-muted-foreground shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Match preview */}
      {testString && !error && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-1">
            <p className="text-xs font-medium text-muted-foreground">Match preview</p>
            <p className="text-xs text-muted-foreground">
              {matches.length === 0
                ? "No matches"
                : `${matches.length} match${matches.length !== 1 ? "es" : ""}`}
            </p>
          </div>
          <div className="rounded-3xl bg-muted p-4 shadow-inner min-h-[60px]">
            <p className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-all">
              {segments.length === 0 ? (
                <span className="text-muted-foreground">No preview</span>
              ) : (
                segments.map((seg, i) =>
                  seg.isMatch ? (
                    <mark
                      key={i}
                      className="bg-yellow-300/80 dark:bg-yellow-400/30 text-foreground rounded-sm px-0.5"
                    >
                      {seg.text}
                    </mark>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )
              )}
            </p>
          </div>
        </div>
      )}

      {/* Match list */}
      {matches.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-xs font-medium text-muted-foreground px-1">Matches</p>
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {matches.map((match, i) => (
              <div
                key={i}
                className="rounded-2xl bg-muted px-4 py-3 shadow-sm space-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-xs text-muted-foreground w-6">
                    #{i + 1}
                  </span>
                  <span className="font-mono text-sm text-foreground break-all">
                    {match[0] || <em className="text-muted-foreground">empty</em>}
                  </span>
                  <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                    index {match.index}
                  </span>
                </div>

                {/* Capture groups */}
                {match.slice(1).length > 0 && (
                  <div className="pl-9 flex flex-wrap gap-2 mt-1">
                    {match.slice(1).map((group, gi) => (
                      <span
                        key={gi}
                        className="rounded-full bg-card px-2 py-0.5 text-xs font-mono text-muted-foreground"
                      >
                        {hasNamedGroups
                          ? `${Object.keys(match.groups)[gi]}: `
                          : `$${gi + 1}: `}
                        {group ?? <em>undefined</em>}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegexTesterTool;
