"use client";

import { useState } from "react";

const JsonFormatterTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
    } catch (err) {
      setError("Invalid JSON");
      setOutput("");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <textarea
        className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-3 mt-3">
        <button
          onClick={formatJSON}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Format JSON
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

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {output && (
        <pre className="mt-4 p-3 border rounded-lg bg-gray-100 overflow-auto">
          {output}
        </pre>
      )}
    </div>
  );
};

export default JsonFormatterTool;
