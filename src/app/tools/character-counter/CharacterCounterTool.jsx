"use client";

import { useState } from "react";

const CharacterCounterTool = () => {
  const [text, setText] = useState("");

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;

  const handleClear = () => setText("");

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-3 mt-3">
        <button
          onClick={handleCopy}
          className="px-4 py-2 border rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          Copy
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 border rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 text-center">
        <div className="p-4 border rounded-lg">
          <p className="text-xl font-semibold">{characters}</p>
          <p className="text-sm text-gray-500">Characters (with spaces)</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p className="text-xl font-semibold">{charactersNoSpaces}</p>
          <p className="text-sm text-gray-500">Characters (no spaces)</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCounterTool;
