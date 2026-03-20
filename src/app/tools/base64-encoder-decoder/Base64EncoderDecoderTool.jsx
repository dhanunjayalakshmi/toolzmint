"use client";

import TextTool from "@/app/components/TextTool";
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
    alert("Copied to clipboard!");
  };

  return (
    <TextTool text={text} setText={setText}>
      {/* Actions */}
      <div className="flex flex-wrap gap-3 mt-3">
        <button
          onClick={encodeText}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Encode
        </button>

        <button
          onClick={decodeText}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Decode
        </button>
      </div>

      {/* Secondary actions */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={handleCopy}
          className="px-4 py-2 border rounded-lg hover:bg-blue-50"
        >
          Copy
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 border rounded-lg hover:bg-blue-50"
        >
          Clear
        </button>

        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </TextTool>
  );
};

export default Base64EncoderDecoderTool;
