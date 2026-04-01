import ToolDiscoveryCard from "@/app/components/discovery/ToolDiscoveryCard";
import { tools } from "@/lib/toolsConfig";
import { Card, CardContent } from "@/components/ui/card";

const ToolLayout = ({ title, description, examples = [], children }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>

        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      <Card className="w-full rounded-[2rem] border-0 bg-linear-to-br from-card via-card to-muted/55 shadow-xl shadow-black/8 focus:outline-none">
        <CardContent className="p-5 sm:p-6">{children}</CardContent>
      </Card>

      {/* Example Input and Output */}
      {examples?.length > 0 && (
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-lg font-semibold">Examples</h2>

          <div className="space-y-4">
            {examples?.map((example, index) => (
              <div
                key={index}
                className="rounded-2xl bg-muted/40 p-4 space-y-2 shadow-sm"
              >
                <p className="text-sm font-medium">Input</p>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {example?.input}
                </pre>

                <p className="text-sm font-medium mt-2">Output</p>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {example?.output}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEO Content */}
      <div className="w-full space-y-4 max-w-2xl">
        <h2 className="text-lg font-semibold">About this tool</h2>

        <p className="text-muted-foreground">
          {description}. This tool helps you process input instantly in your
          browser without installing any software.
        </p>

        <h2 className="text-lg font-semibold">How to use</h2>

        <ul className="list-disc ml-5 text-muted-foreground">
          <li>Enter your input</li>
          <li>View the result instantly</li>
          <li>Copy output if needed</li>
        </ul>
      </div>

      {/* Related Tools */}
      <div className="w-full space-y-4">
        <h2 className="text-xl font-semibold">Related Tools</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {tools
            ?.filter((t) => t.name !== title)
            ?.slice(0, 6)
            ?.map((tool) => (
              <ToolDiscoveryCard key={tool?.slug} tool={tool} compact />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
