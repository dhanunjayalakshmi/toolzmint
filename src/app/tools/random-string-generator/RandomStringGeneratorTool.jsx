"use client";

import { useState } from "react";
import { generateRandomString } from "@/lib/textUtils";
import { Button } from "@/components/ui/button";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";

const RandomStringGeneratorTool = () => {
  const [length, setLength] = useState(10);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    const len = Number(length) || 0;
    if (len <= 0) return;
    setOutput(generateRandomString(len));
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setOutput("");
    setLength(10);
  };

  return (
    <>
      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">
          Text Length
        </label>

        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="
            w-full rounded-lg p-3
            bg-muted
            focus:outline-none focus:ring-2 focus:ring-primary/40
          "
        />
      </div>

      {/* Generate Button */}
      <div>
        <Button onClick={handleGenerate} className="w-full">
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

      {/* Actions */}
      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
      />
    </>
  );
};

export default RandomStringGeneratorTool;
