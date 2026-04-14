"use client";

import { useMemo, useState } from "react";
import ToolActions from "@/app/components/tools/ToolActions";
import ToolStatsCard from "@/app/components/tools/ToolStatsCard";
import { renderMarkdownPreview } from "@/lib/markdownUtils";

const DEFAULT_MARKDOWN = `# Toolzmint Markdown Preview

Write **markdown** on the left and preview it on the right.

- Headings
- Lists
- \`inline code\`

> Useful for notes, docs, and README drafts.

[Visit Toolzmint](https://toolzmint.com)`;

const MarkdownPreviewerTool = () => {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => renderMarkdownPreview(markdown), [markdown]);

  const handleClear = () => {
    setMarkdown("");
  };

  const handleCopy = async () => {
    if (!result.html) {
      return;
    }

    await navigator.clipboard.writeText(result.html);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full space-y-4">
      <div className="rounded-3xl bg-muted p-4 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Preview markdown instantly and copy the rendered HTML when needed.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Markdown Input
          </p>
          <div className="overflow-hidden rounded-3xl bg-muted shadow-inner">
            <textarea
              value={markdown}
              onChange={(event) => setMarkdown(event.target.value)}
              placeholder="Type or paste markdown here..."
              className="h-[320px] w-full resize-none border-0 bg-transparent p-4 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Preview</p>
          <div className="markdown-preview h-[320px] overflow-auto rounded-3xl bg-muted p-4 text-sm text-foreground shadow-inner">
            {result.error ? (
              <p className="text-red-500">{result.error}</p>
            ) : result.html ? (
              <div dangerouslySetInnerHTML={{ __html: result.html }} />
            ) : (
              <p className="text-muted-foreground">
                Preview will appear here...
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <ToolStatsCard label="Words" value={result.stats.words} />
        <ToolStatsCard label="Lines" value={result.stats.lines} />
        <ToolStatsCard label="Characters" value={result.stats.characters} />
      </div>

      <ToolActions
        onClear={handleClear}
        onCopy={handleCopy}
        disableCopy={!result.html || !result.isValid}
        copied={copied}
      />
    </div>
  );
};

export default MarkdownPreviewerTool;
