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
    alert("Copied to clipboard!");
  };

  return (
    <>
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

      {error & <p className="text-red-500 mt-3">{error}</p>}

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!output}
      />
    </>
  );
};

export default JsonFormatterTool;
