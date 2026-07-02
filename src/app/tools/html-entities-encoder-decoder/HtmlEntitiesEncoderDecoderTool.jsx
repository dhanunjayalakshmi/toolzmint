"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolTextarea from "@/app/components/tools/ToolTextarea";
import { Button } from "@/components/ui/button";
import { decodeHtmlEntities, encodeHtmlEntities } from "@/lib/htmlEntitiesUtils";

const MODE_ENCODE = "encode";
const MODE_DECODE = "decode";

const HtmlEntitiesEncoderDecoderTool = () => {
  const [mode, setMode] = useState(MODE_ENCODE);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () =>
      mode === MODE_ENCODE
        ? encodeHtmlEntities(text)
        : decodeHtmlEntities(text),
    [mode, text]
  );

  const handleClear = () => setText("");

  const handleCopy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
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
            Encode to HTML Entities
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
            Decode HTML Entities
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          {mode === MODE_ENCODE
            ? "Converts characters like <, >, &, and \" into safe HTML entity equivalents."
            : "Converts HTML entities like &lt;, &amp;, and &#39; back into readable characters."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ToolTextarea
          label={mode === MODE_ENCODE ? "Plain Text" : "HTML with Entities"}
          value={text}
          onChange={setText}
          placeholder={
            mode === MODE_ENCODE
              ? 'Type text with <tags>, & symbols, or "quotes"...'
              : "Paste HTML with &lt;, &amp;, &#39; entities..."
          }
        />

        <ToolTextarea
          label={mode === MODE_ENCODE ? "Encoded HTML Entities" : "Decoded Text"}
          value={result}
          readOnly
          placeholder={
            mode === MODE_ENCODE
              ? "Encoded entities will appear here..."
              : "Decoded text will appear here..."
          }
        />
      </div>

      {text.trim() && (
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-foreground">Input Length</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {text.length} characters
            </p>
          </div>
          <div className="rounded-3xl bg-card p-4 shadow-sm">
            <p className="text-sm font-medium text-foreground">Output Length</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {result.length} characters
            </p>
          </div>
        </div>
      )}

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!result}
        copied={copied}
      />
    </div>
  );
};

export default HtmlEntitiesEncoderDecoderTool;
