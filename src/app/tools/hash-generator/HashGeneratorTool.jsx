"use client";

import { useEffect, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { generateAllHashes, HASH_ALGORITHMS } from "@/lib/hashUtils";

const HashGeneratorTool = () => {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState({});
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (!text) {
      setHashes({});
      return;
    }
    const t = setTimeout(() => {
      generateAllHashes(text).then(setHashes);
    }, 300);
    return () => clearTimeout(t);
  }, [text]);

  const handleCopy = async (alg) => {
    if (!hashes[alg]) return;
    await navigator.clipboard.writeText(hashes[alg]);
    setCopied(alg);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleClear = () => {
    setText("");
    setHashes({});
  };

  return (
    <div className="w-full space-y-4">
      <ToolTextarea
        label="Input Text"
        value={text}
        onChange={setText}
        placeholder="Type or paste text to hash..."
      />

      {text && (
        <div className="space-y-2">
          {HASH_ALGORITHMS.map((alg) => (
            <div
              key={alg}
              className="flex items-center gap-3 rounded-3xl bg-muted p-4 shadow-sm"
            >
              <span className="w-16 shrink-0 text-xs font-semibold text-muted-foreground">
                {alg}
              </span>
              <span className="min-w-0 flex-1 break-all font-mono text-xs text-foreground">
                {hashes[alg] ?? "Computing..."}
              </span>
              <Button
                type="button"
                size="sm"
                onClick={() => handleCopy(alg)}
                disabled={!hashes[alg]}
                className="shrink-0 cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md active:scale-95 disabled:opacity-50"
              >
                {copied === alg ? "copied" : "copy"}
              </Button>
            </div>
          ))}
        </div>
      )}

      <ToolActions
        onClear={handleClear}
        onCopy={() => handleCopy("SHA-256")}
        disableCopy={!hashes["SHA-256"]}
        copied={copied === "SHA-256"}
      />
    </div>
  );
};

export default HashGeneratorTool;
