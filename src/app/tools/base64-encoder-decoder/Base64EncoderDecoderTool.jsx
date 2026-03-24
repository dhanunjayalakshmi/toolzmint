"use client";

import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Base64EncoderDecoderTool = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const encodeText = () => {
    if (!text) return;
    setText(btoa(text));
  };

  const decodeText = () => {
    try {
      if (!text) return;
      setText(atob(text));
      setError("");
    } catch {
      setError("Invalid base64");
    }
  };

  const handleClear = () => {
    setText("");
    setError("");
  };

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full space-y-4">
      {/* Input */}
      <ToolTextarea
        label="Text"
        value={text}
        onChange={setText}
        placeholder="Type or paste your text here..."
      />

      {/* Modifier Actions */}
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          onClick={encodeText}
          className="rounded-lg cursor-pointer shadow-sm active:scale-95 transition"
        >
          Encode
        </Button>

        <Button
          size="sm"
          onClick={decodeText}
          className="rounded-lg cursor-pointer shadow-sm active:scale-95 transition"
        >
          Decode
        </Button>
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {/* Utility Actions */}
      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!text}
      />
    </div>
  );
};

export default Base64EncoderDecoderTool;
