"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { decodeBase64Text, encodeBase64Text } from "@/lib/base64Utils";

const MODE_ENCODE = "encode";
const MODE_DECODE = "decode";

const Base64EncoderDecoderTool = () => {
  const [mode, setMode] = useState(MODE_ENCODE);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const result = useMemo(
    () => (mode === MODE_ENCODE ? encodeBase64Text(text) : decodeBase64Text(text)),
    [mode, text],
  );

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
            Encode to Base64
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
            Decode Base64
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          {mode === MODE_ENCODE
            ? "Convert plain text into Base64 for compact transport and storage."
            : "Decode Base64 back into readable text. Whitespace is ignored automatically."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ToolTextarea
          label={mode === MODE_ENCODE ? "Plain Text" : "Base64 Input"}
          value={text}
          onChange={setText}
          placeholder={
            mode === MODE_ENCODE
              ? "Type or paste plain text here..."
              : "Paste Base64 text here..."
          }
        />

        <ToolTextarea
          label={mode === MODE_ENCODE ? "Base64 Output" : "Decoded Text"}
          value={result.output}
          readOnly
          placeholder={
            mode === MODE_ENCODE
              ? "Encoded Base64 will appear here..."
              : "Decoded text will appear here..."
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
                  : "Valid Base64"
                : "Invalid Base64"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.isValid
                ? mode === MODE_ENCODE
                  ? "Your text has been converted to Base64."
                  : "Your Base64 input has been decoded successfully."
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

export default Base64EncoderDecoderTool;
