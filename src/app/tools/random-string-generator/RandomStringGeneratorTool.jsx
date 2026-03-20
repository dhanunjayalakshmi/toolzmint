"use client";

import TextTool from "@/app/components/TextTool";
import { generateRandomString } from "@/lib/textUtils";
import { useState } from "react";

const RandomStringGeneratorTool = () => {
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(10);

  const handleClear = () => {
    setText("");
    setTextLength(10);
  };

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <label htmlFor="length" className="mt-2">
        Text Length
      </label>
      <input
        type="text"
        value={textLength}
        onChange={(e) => setTextLength(e.target.value)}
        className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />

      <div className="flex flex-wrap gap-3 mt-3">
        <button
          onClick={() => setText(generateRandomString(textLength))}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
          Generate Text
        </button>

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
      {text && (
        <pre className="my-4 p-3 h-20 border rounded-lg bg-gray-100 overflow-auto">
          {text}
        </pre>
      )}
    </div>
  );
};

export default RandomStringGeneratorTool;
