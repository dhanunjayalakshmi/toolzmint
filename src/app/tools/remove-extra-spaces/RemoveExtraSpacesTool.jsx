"use client";

import { useState } from "react";

const RemoveExtraSpacesTool = () => {
  const [text, setText] = useState("");

  const cleanedText = text?.replace(/\s+/g, " ").trim();

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async () => {
    if (!cleanedText) return;
    await navigator.clipboard.writeText(cleanedText);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      {/* Textarea */}
      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Actions */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
        >
          Copy
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
        >
          Clear
        </button>
      </div>

      {cleanedText && (
        <pre className="mt-4 p-3 border rounded-lg bg-gray-100 overflow-auto">
          {cleanedText}
        </pre>
      )}
    </div>
  );
};

export default RemoveExtraSpacesTool;
