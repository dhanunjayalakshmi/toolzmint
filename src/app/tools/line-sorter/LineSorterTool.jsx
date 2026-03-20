"use client";

import TextTool from "@/app/components/TextTool";
import { sortLines } from "@/lib/textUtils";
import { useState } from "react";

const LineSorterTool = () => {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
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
          onClick={() => setText(sortLines(text))}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
        >
          Sort Lines
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
    </TextTool>
  );
};

export default LineSorterTool;
