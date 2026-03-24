import { useState } from "react";

const useTransformer = (transformFn) => {
  const [input, setInput] = useState("");

  const output = transformFn(input || "");

  const handleClear = () => setInput("");

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  return {
    input,
    setInput,
    output,
    handleClear,
    handleCopy,
    hasOutput: Boolean(output),
  };
};

export default useTransformer;
