import { tools } from "@/lib/toolsConfig";
import { Card, CardContent } from "@/components/ui/card";
import AnalyzerLayout from "./tools/layouts/AnalyzerLayout";
import TransformerLayout from "./tools/layouts/TransformerLayout";
import DefaultLayout from "./tools/layouts/DefaultLayout";
import ModifierLayout from "./tools/layouts/ModifierLayout";
import GeneratorLayout from "./tools/layouts/GeneratorLayout";

const layoutMap = {
  transformer: TransformerLayout,
  analyzer: AnalyzerLayout,
  modifier: ModifierLayout,
  generator: GeneratorLayout,
};

const ToolLayout = ({ title, description, children, type }) => {
  const LayoutComponent = layoutMap[type] || DefaultLayout;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>

      {/* Tool UI (MAIN SURFACE) */}
      <Card className="shadow-lg border border-border rounded-xl">
        <CardContent className="p-5">
          <LayoutComponent>{children}</LayoutComponent>
        </CardContent>
      </Card>

      {/* SEO Content */}
      <div className="space-y-4 max-w-2xl">
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
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Related Tools</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {tools
            ?.filter((t) => t.name !== title)
            ?.slice(0, 6)
            ?.map((tool) => (
              <a
                key={tool?.slug}
                href={`/tools/${tool?.slug}`}
                className="p-3 rounded-lg border border-border/60 bg-card hover:bg-muted transition"
              >
                {tool?.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
