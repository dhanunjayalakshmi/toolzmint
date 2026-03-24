import { useState } from "react";

const useTransformer = (transformFn) => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const output = transformFn(input || "");

  const handleClear = () => setInput("");

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return {
    input,
    setInput,
    output,
    handleClear,
    handleCopy,
    hasOutput: Boolean(output),
    copied,
  };
};

export default useTransformer;
