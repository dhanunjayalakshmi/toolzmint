"use client";

import { useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { generateUuidBatch } from "@/lib/uuidUtils";

const ResultCard = ({ label, value }) => {
  return (
    <div className="rounded-3xl bg-muted px-4 py-3 shadow-sm transition-colors hover:bg-muted/80">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="mt-2 text-sm text-muted-foreground">{value}</p>
    </div>
  );
};

const UuidGeneratorTool = () => {
  const [count, setCount] = useState("1");
  const [includeHyphens, setIncludeHyphens] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const uuids = generateUuidBatch(Number(count), { includeHyphens });
    setOutput(uuids.join("\n"));
  };

  const handleClear = () => {
    setCount("1");
    setIncludeHyphens(true);
    setOutput("");
  };

  const handleCopy = async () => {
    if (!output) {
      return;
    }

    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const generatedCount = output ? output.split("\n").length : 0;

  return (
    <div className="w-full space-y-5">
      <div className="space-y-4 rounded-3xl p-4 shadow-sm">
        <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,180px)_1fr]">
          <div className="flex h-full flex-col justify-between gap-3 rounded-3xl bg-muted px-4 py-3 shadow-sm transition-colors hover:bg-muted/80">
            <label className="text-sm font-medium text-foreground">
              Number of UUIDs
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={count}
              onChange={(event) => setCount(event.target.value)}
              className="w-full rounded-3xl bg-background px-4 py-3 text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="flex h-full">
            <div className="flex h-full w-full items-center justify-between gap-4 rounded-3xl bg-muted px-4 py-3 shadow-sm transition-colors hover:bg-muted/80">
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  Include Hyphens
                </p>
                <p className="text-sm text-muted-foreground">
                  Keep the standard UUID format with dashes.
                </p>
              </div>

              <Switch
                checked={includeHyphens}
                onCheckedChange={setIncludeHyphens}
                aria-label="Toggle UUID hyphens"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={handleGenerate}
            className="cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
          >
            Generate UUIDs
          </Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <ResultCard
          label="Generated"
          value={`${generatedCount} UUID${generatedCount === 1 ? "" : "s"}`}
        />
        <ResultCard
          label="Format"
          value={
            includeHyphens
              ? "Standard UUID with hyphens"
              : "32-character UUID without hyphens"
          }
        />
      </div>

      <div className="space-y-3 rounded-3xl p-3 shadow-sm">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            Generated UUIDs
          </p>
          <p className="text-sm text-muted-foreground">
            UUIDs are generated locally in your browser using secure random
            values.
          </p>
        </div>

        <ToolTextarea
          value={output}
          label=""
          placeholder="Generated UUIDs will appear here..."
          readOnly
        />
      </div>

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
        copied={copied}
      />
    </div>
  );
};

export default UuidGeneratorTool;
