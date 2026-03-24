"use client";

import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { useEffect, useState } from "react";

const JsonFormatterTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const formatJSON = () => {
      try {
        const parsed = JSON.parse(input);
        const formatted = JSON.stringify(parsed, null, 2);
        setOutput(formatted);
        setError("");
      } catch (err) {
        setOutput("");
        setError("Invalid JSON");
      }
    };

    formatJSON();
  }, [input]);

  const handleClear = () => {
    setInput("");
    setError("");
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToolTextarea
          label="Input"
          value={input}
          onChange={setInput}
          placeholder="Type or paste your text here..."
        />

        <ToolTextarea
          label="Output"
          value={output}
          readOnly
          placeholder="Output..."
        />
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
      />
    </div>
  );
};

export default JsonFormatterTool;
