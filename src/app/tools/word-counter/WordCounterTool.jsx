"use client";

import { useState } from "react";

const WordCounterTool = () => {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;
  const sentences =
    text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      {/* Textarea */}
      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 resize-none"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Actions */}
      <div className="flex gap-3 mt-3">
        <button
          onClick={handleCopy}
          className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-600"
        >
          Copy
        </button>

        <button
          onClick={handleClear}
          className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-600"
        >
          Clear
        </button>
      </div>

      {/* Info */}
      <p className="text-sm text-gray-500 mt-2">
        Words are counted based on spaces. Sentences are detected using
        punctuation.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div className="p-4 border rounded-lg">
          <p className="text-xl font-semibold">{words}</p>
          <p className="text-sm text-gray-500">Words</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p className="text-xl font-semibold">{characters}</p>
          <p className="text-sm text-gray-500">Characters</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p className="text-xl font-semibold">{sentences}</p>
          <p className="text-sm text-gray-500">Sentences</p>
        </div>
      </div>
    </div>
  );
};

export default WordCounterTool;
