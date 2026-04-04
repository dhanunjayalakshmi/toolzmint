"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import {
  MODE_DECODE,
  MODE_ENCODE,
  processUrlInput,
} from "@/lib/urlUtils";

const UrlEncoderDecoderTool = () => {
  const [mode, setMode] = useState(MODE_ENCODE);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => processUrlInput(text, mode), [mode, text]);

  const handleClear = () => {
    setText("");
  };

  const handleCopy = async () => {
    if (!result.output) return;
    await navigator.clipboard.writeText(result.output);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-3 rounded-3xl bg-muted p-4 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={mode === MODE_ENCODE ? "default" : "outline"}
            onClick={() => setMode(MODE_ENCODE)}
            className={
              mode === MODE_ENCODE
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
            }
          >
            Encode URL
          </Button>

          <Button
            type="button"
            size="sm"
            variant={mode === MODE_DECODE ? "default" : "outline"}
            onClick={() => setMode(MODE_DECODE)}
            className={
              mode === MODE_DECODE
                ? "cursor-pointer rounded-full shadow-sm transition-all hover:shadow-md"
                : "cursor-pointer rounded-full border-0 bg-card shadow-sm transition-all hover:bg-background/90 hover:shadow-md"
            }
          >
            Decode URL
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          {mode === MODE_ENCODE
            ? "Convert readable URLs or text into URL-safe encoded values."
            : "Decode URL-encoded text back into readable characters and spaces."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ToolTextarea
          label={mode === MODE_ENCODE ? "Readable Input" : "Encoded Input"}
          value={text}
          onChange={setText}
          placeholder={
            mode === MODE_ENCODE
              ? "Paste a URL or text like https://toolzmint.com/tools?name=hello world"
              : "Paste encoded text like hello%20world or a full encoded URL"
          }
        />

        <ToolTextarea
          label={mode === MODE_ENCODE ? "Encoded Output" : "Decoded Output"}
          value={result.output}
          readOnly
          placeholder={
            mode === MODE_ENCODE
              ? "URL-encoded output will appear here..."
              : "Decoded output will appear here..."
          }
        />
      </div>

      {text.trim() ? (
        <div className="grid gap-3 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.8fr))]">
          <div
            className={`rounded-3xl p-4 shadow-sm ${result.isValid ? "bg-card text-foreground" : "bg-card text-red-500"}`}
          >
            <p className="text-sm font-medium">
              {result.isValid
                ? mode === MODE_ENCODE
                  ? "Ready to encode"
                  : "Decoded successfully"
                : "Invalid encoded input"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.isValid
                ? mode === MODE_ENCODE
                  ? "Your text has been converted into a URL-safe encoded value."
                  : "Your encoded text has been decoded into readable output."
                : result.error}
            </p>
          </div>

          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-foreground">Input Length</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.stats?.inputCharacters ?? text.length}
            </p>
          </div>

          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-foreground">Output Length</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.stats?.outputCharacters ?? 0}
            </p>
          </div>
        </div>
      ) : null}

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!result.output}
        copied={copied}
      />
    </div>
  );
};

export default UrlEncoderDecoderTool;
