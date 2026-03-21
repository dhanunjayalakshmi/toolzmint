"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToolLayout = ({
  title,
  description,
  children,
  input,
  output,
  setInput,
  examples = [],
}) => {
  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Tool Card */}
      <Card className="border border-border shadow-sm">
        <CardContent className="p-4 space-y-4">
          {/* Tool Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children}
          </div>

          {/* Actions */}
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
            <Button onClick={handleCopy}>Copy Output</Button>
          </div>
        </CardContent>
      </Card>

      {/* Examples */}
      {examples.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Example</h2>

          {examples.map((ex, i) => (
            <div
              key={i}
              className="p-4 border border-border rounded-lg bg-muted"
            >
              <p className="text-sm">
                <strong>Input:</strong> {ex.input}
              </p>
              <p className="text-sm mt-2">
                <strong>Output:</strong> {ex.output}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* SEO Block */}
      <div className="text-sm text-muted-foreground space-y-2">
        <h2 className="text-lg font-semibold text-foreground">
          About this tool
        </h2>
        <p>
          This tool helps you process your input instantly in your browser. No
          data is stored or sent to any server.
        </p>
      </div>
    </div>
  );
};

export default ToolLayout;
