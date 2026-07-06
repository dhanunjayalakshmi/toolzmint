"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DELIMITERS, jsonToCsv } from "@/lib/jsonToCsvUtils";

const PLACEHOLDER = `[
  { "name": "Alice", "age": 30, "city": "New York" },
  { "name": "Bob",   "age": 25, "city": "London"   }
]`;

const JsonToCsvTool = () => {
  const [input, setInput] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [copied, setCopied] = useState(false);

  const { output, error, stats } = useMemo(
    () => jsonToCsv(input, { delimiter, includeHeaders }),
    [input, delimiter, includeHeaders]
  );

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleClear = () => setInput("");

  return (
    <div className="w-full space-y-4">
      {/* Options */}
      <div className="flex flex-wrap items-center gap-4 rounded-3xl bg-muted px-5 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">Delimiter:</span>
          <div className="flex gap-1">
            {DELIMITERS.map((d) => (
              <Button
                key={d.id}
                type="button"
                size="sm"
                variant={delimiter === d.id ? "default" : "outline"}
                onClick={() => setDelimiter(d.id)}
                className={
                  delimiter === d.id
                    ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                    : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
                }
              >
                {d.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="headers"
            checked={includeHeaders}
            onCheckedChange={setIncludeHeaders}
          />
          <Label htmlFor="headers" className="cursor-pointer text-xs text-muted-foreground">
            Include headers
          </Label>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground px-1">JSON input</p>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={PLACEHOLDER}
          rows={10}
          spellCheck={false}
          className="w-full resize-none rounded-3xl bg-muted p-4 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="rounded-2xl bg-red-500/10 px-4 py-2 text-sm text-red-500">{error}</p>
      )}

      {/* Stats */}
      {stats && !error && (
        <div className="flex gap-3">
          {[
            { label: "Rows", value: stats.rows },
            { label: "Columns", value: stats.columns },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-2xl bg-muted px-4 py-2 shadow-sm text-center min-w-20">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-lg font-semibold">{value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="space-y-1.5">
          <p className="text-xs font-medium text-muted-foreground px-1">CSV output</p>
          <textarea
            value={output}
            readOnly
            rows={10}
            className="w-full resize-none rounded-3xl bg-muted p-4 font-mono text-sm text-foreground shadow-inner focus:outline-none"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-2 justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={handleClear}
          disabled={!input}
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
        >
          Clear
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          disabled={!output}
          className="rounded-full border-0 bg-muted shadow-sm cursor-pointer transition-all hover:bg-muted/80 hover:shadow-md active:scale-95 disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy CSV"}
        </Button>
        <Button
          size="sm"
          onClick={handleDownload}
          disabled={!output}
          className="rounded-full shadow-sm cursor-pointer transition-all hover:shadow-md active:scale-95 disabled:opacity-50"
        >
          Download .csv
        </Button>
      </div>
    </div>
  );
};

export default JsonToCsvTool;
