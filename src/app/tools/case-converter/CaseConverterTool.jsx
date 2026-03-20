"use client";

import { useState } from "react";

const CaseConverterTool = () => {
  const [text, setText] = useState("");

  const toUpperCase = () => setText(text.toUpperCase());

  const toLowerCase = () => setText(text.toLowerCase());

  const toTitleCase = () => {
    const title = text
      .toLowerCase()
      .split(" ")
      .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
      .join(" ");
    setText(title);
  };

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
          onClick={toUpperCase}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          UPPERCASE
        </button>

        <button
          onClick={toLowerCase}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          lowercase
        </button>

        <button
          onClick={toTitleCase}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Title Case
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
      </div>
    </div>
  );
};

export default CaseConverterTool;
