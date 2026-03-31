import Link from "next/link";
import ToolGroupSection from "@/app/components/discovery/ToolGroupSection";
import { tools } from "@/lib/toolsConfig";
import { getToolGroups } from "@/lib/toolDiscovery";

const Page = () => {
  const toolGroups = getToolGroups(tools);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 space-y-12">
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">All Tools</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Browse the full Toolzmint library by category so it is easier to
            find the right tool without scanning one crowded grid.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {toolGroups.map((group) => (
            <Link
              key={group.type}
              href={`#${group.type}`}
              className="rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground shadow-sm transition-all hover:bg-muted/80 hover:text-foreground hover:shadow-md"
            >
              {group.label} ({group.count})
            </Link>
          ))}
        </div>
      </section>

      <div className="space-y-10">
        {toolGroups.map((group) => (
          <ToolGroupSection
            key={group.type}
            id={group.type}
            title={group.label}
            description={group.description}
            tools={group.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
