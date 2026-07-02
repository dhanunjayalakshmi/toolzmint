"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { csvToJson, DELIMITERS } from "@/lib/csvUtils";

const CsvToJsonTool = () => {
  const [input, setInput] = useState("");
  const [delimiter, setDelimiter] = useState("auto");
  const [hasHeader, setHasHeader] = useState(true);
  const [pretty, setPretty] = useState(true);
  const [copied, setCopied] = useState(false);

  const { output, stats, error } = useMemo(
    () => csvToJson(input, { delimiter, hasHeader, pretty }),
    [input, delimiter, hasHeader, pretty]
  );

  const handleClear = () => setInput("");

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              Delimiter:
            </span>
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

        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            <Switch
              id="header-toggle"
              checked={hasHeader}
              onCheckedChange={setHasHeader}
            />
            <Label htmlFor="header-toggle" className="cursor-pointer text-sm">
              First row is header
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="pretty-toggle"
              checked={pretty}
              onCheckedChange={setPretty}
            />
            <Label htmlFor="pretty-toggle" className="cursor-pointer text-sm">
              Pretty print
            </Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ToolTextarea
          label="CSV Input"
          value={input}
          onChange={setInput}
          placeholder={"name,age,city\nAlice,30,New York\nBob,25,London"}
        />

        <ToolTextarea
          label="JSON Output"
          value={error ? error : output}
          readOnly
          placeholder="Converted JSON will appear here..."
        />
      </div>

      {stats && (
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium">Rows</p>
            <p className="mt-1 text-sm text-muted-foreground">{stats.rows}</p>
          </div>
          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium">Columns</p>
            <p className="mt-1 text-sm text-muted-foreground">{stats.columns}</p>
          </div>
          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium">Delimiter detected</p>
            <p className="mt-1 text-sm text-muted-foreground">{stats.delimiter}</p>
          </div>
        </div>
      )}

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
        copied={copied}
      />
    </div>
  );
};

export default CsvToJsonTool;
