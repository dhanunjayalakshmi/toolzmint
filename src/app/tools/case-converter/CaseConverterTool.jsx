"use client";

import { toLowerCase, toTitleCase, toUpperCase } from "@/lib/textUtils";
import { useState } from "react";

const CaseConverterTool = () => {
  const [text, setText] = useState("");

  const handleClear = () => setText("");

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      {/* Input */}
      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mt-3">
        <button
          onClick={() => setText(toUpperCase(text))}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
          UPPERCASE
        </button>

        <button
          onClick={() => setText(toLowerCase(text))}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
          lowercase
        </button>

        <button
          onClick={() => setText(toTitleCase(text))}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
          Title Case
        </button>

        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
          Copy
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CaseConverterTool;
