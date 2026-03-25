"use client";

import { useState } from "react";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import ToolActions from "@/app/components/tools/ToolActions";

const TextRepeaterTool = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!input || count <= 0) return;
    setOutput(Array(Number(count)).fill(input).join(" "));
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setOutput("");
    setCount(1);
  };

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 flex flex-col">
          <ToolTextarea
            label="Input"
            value={input}
            onChange={setInput}
            placeholder="Type or paste your text here..."
          />
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="w-full p-3 rounded-lg bg-muted"
            placeholder="Repeat count"
          />

          <Button
            size="sm"
            onClick={handleGenerate}
            className="mr-auto rounded-lg cursor-pointer shadow-sm active:scale-95 transition"
          >
            Generate
          </Button>
        </div>
        <ToolTextarea
          label="Generated Text"
          value={output}
          readOnly
          placeholder="Generated text will appear here..."
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

export default TextRepeaterTool;
