"use client";

import { useState } from "react";

const WordCounterTool = () => {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;
  const sentences =
    text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Word Counter</h1>

      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p className="text-sm text-gray-500 mt-2">
        Words are counted based on spaces. Sentences are detected using
        punctuation.
      </p>

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
