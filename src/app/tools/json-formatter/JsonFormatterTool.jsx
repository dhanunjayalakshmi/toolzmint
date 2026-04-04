"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { MODE_FORMAT, MODE_MINIFY, processJsonInput } from "@/lib/jsonUtils";

const JsonFormatterTool = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState(MODE_FORMAT);
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => processJsonInput(input, mode), [input, mode]);

  const handleClear = () => {
    setInput("");
  };

  const handleCopy = async () => {
    if (!result.output) return;
    await navigator.clipboard.writeText(result.output);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={mode === MODE_FORMAT ? "default" : "outline"}
            onClick={() => setMode(MODE_FORMAT)}
            className={
              mode === MODE_FORMAT
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
            }
          >
            Format JSON
          </Button>

          <Button
            type="button"
            size="sm"
            variant={mode === MODE_MINIFY ? "default" : "outline"}
            onClick={() => setMode(MODE_MINIFY)}
            className={
              mode === MODE_MINIFY
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
            }
          >
            Minify JSON
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Paste JSON to format it for readability or minify it for compact use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ToolTextarea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder='Paste JSON here, for example {"name":"Toolzmint","type":"tool"}'
        />

        <ToolTextarea
          label="Output"
          value={result.output}
          readOnly
          placeholder={
            mode === MODE_MINIFY
              ? "Minified JSON will appear here..."
              : "Formatted JSON will appear here..."
          }
        />
      </div>

      {input.trim() ? (
        <div className="grid gap-3 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.7fr))]">
          <div
            className={`rounded-3xl p-4 shadow-sm ${result.isValid ? "bg-card text-foreground" : "bg-card text-red-500"}`}
          >
            <p className="text-sm font-medium">
              {result.isValid ? "Valid JSON" : "Invalid JSON"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.isValid
                ? mode === MODE_MINIFY
                  ? "Your JSON is valid and ready in compact form."
                  : "Your JSON is valid and formatted for readability."
                : result.error}
            </p>
          </div>

          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-foreground">Characters</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.stats?.characters ?? 0}
            </p>
          </div>

          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-foreground">Lines</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.stats?.lines ?? 0}
            </p>
          </div>
        </div>
      ) : null}

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!result.output}
        copied={copied}
      />
    </div>
  );
};

export default JsonFormatterTool;
