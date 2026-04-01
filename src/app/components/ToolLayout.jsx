import ToolDiscoveryCard from "@/app/components/discovery/ToolDiscoveryCard";
import { tools } from "@/lib/toolsConfig";
import { Card, CardContent } from "@/components/ui/card";

const ToolLayout = ({ title, description, examples = [], children }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>

        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      <Card className="w-full rounded-[2rem] border-0 bg-linear-to-br from-card via-card to-muted/55 shadow-xl shadow-black/8 focus:outline-none">
        <CardContent className="p-5 sm:p-6">{children}</CardContent>
      </Card>

      {examples?.length > 0 && (
        <section className="max-w-3xl space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Examples</h2>

          <div className="space-y-4">
            {examples?.map((example, index) => (
              <div
                key={index}
                className="space-y-2 rounded-3xl bg-card p-5 shadow-sm shadow-black/5"
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
        </section>
      )}

      <section className="space-y-5 rounded-[2rem] bg-muted/55 p-6 shadow-sm shadow-black/5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">About this tool</h2>

          <p className="max-w-3xl text-muted-foreground">
            {description}. This tool helps you process input instantly in your
            browser without installing any software.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">How to use</h2>

          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-2 inline-block size-2.5 shrink-0 rounded-full bg-primary/70" />
              <span>Enter your input.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 inline-block size-2.5 shrink-0 rounded-full bg-primary/70" />
              <span>View the result instantly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 inline-block size-2.5 shrink-0 rounded-full bg-primary/70" />
              <span>Copy the output if needed.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Related Tools</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools
            ?.filter((t) => t.name !== title)
            ?.slice(0, 6)
            ?.map((tool) => (
              <ToolDiscoveryCard key={tool?.slug} tool={tool} compact />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ToolLayout;
