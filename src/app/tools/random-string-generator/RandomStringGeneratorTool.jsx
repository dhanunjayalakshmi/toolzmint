"use client";

import { useState } from "react";
import { generateRandomString } from "@/lib/textUtils";
import { Button } from "@/components/ui/button";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";

const RandomStringGeneratorTool = () => {
  const [length, setLength] = useState(10);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    const len = Number(length) || 0;
    if (len <= 0) return;
    setOutput(generateRandomString(len));
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setOutput("");
    setLength(10);
  };

  return (
    <div className="w-full space-y-4">
      {/* Input */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium text-muted-foreground">
            Text Length
          </label>

          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="
            border border-border rounded-lg p-3
            bg-foreground
            focus:outline-none focus:ring-2 focus:ring-primary/40
          "
          />

          <Button
            size="sm"
            onClick={handleGenerate}
            className="m-auto rounded-lg cursor-pointer shadow-sm active:scale-95 transition"
          >
            Generate
          </Button>
        </div>

        {/* Output */}
        <ToolTextarea
          label="Generated Text"
          value={output}
          readOnly
          placeholder="Generated text will appear here..."
        />
      </div>

      {/* Actions */}
      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
        copied={copied}
      />
    </div>
  );
};

export default RandomStringGeneratorTool;
