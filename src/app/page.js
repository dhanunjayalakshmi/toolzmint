import Link from "next/link";
import ToolDiscoveryCard from "@/app/components/discovery/ToolDiscoveryCard";
import ToolGroupSection from "@/app/components/discovery/ToolGroupSection";
import { tools } from "@/lib/toolsConfig";
import { getFeaturedTools, getToolGroups } from "@/lib/toolDiscovery";

const Home = () => {
  const featuredTools = getFeaturedTools(tools);
  const toolGroups = getToolGroups(tools, 3);
  const totalTools = tools.length;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 space-y-14">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground shadow-sm">
            Free online tools that stay fast and simple
          </p>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Daily utility tools with cleaner workflows and instant results.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Toolzmint helps you generate, analyze, clean, and transform text
              without noisy interfaces or unnecessary steps.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/tools"
              className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md"
            >
              Browse all tools
            </Link>

            <p className="text-sm text-muted-foreground">
              {totalTools} tools across generators, analyzers, transformers, and
              modifiers
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-muted/70 p-5 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            {toolGroups.map((group) => (
              <div key={group.type} className="rounded-3xl bg-background/70 p-4 shadow-sm">
                <p className="text-2xl font-semibold">{group.count}</p>
                <p className="text-sm text-muted-foreground">{group.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Start with the essentials
          </h2>
          <p className="text-sm text-muted-foreground">
            A curated set of tools people tend to use first.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featuredTools.map((tool) => (
            <ToolDiscoveryCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Browse by what you need to do
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore categories instead of scrolling through one long flat list.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {toolGroups.map((group) => (
            <ToolGroupSection
              key={group.type}
              title={group.label}
              description={group.description}
              tools={group.tools}
              compact
            />
          ))}
        </div>
      </section>

      <section className="space-y-4 text-foreground">
        <h2 className="text-xl font-semibold">What is Toolzmint?</h2>
        <p className="max-w-3xl text-muted-foreground">
          Toolzmint is a collection of free online tools designed to help you
          complete everyday tasks quickly and efficiently. From text processing
          to simple calculations, everything is built for speed and ease of use.
        </p>

        <h2 className="text-xl font-semibold">Why use online tools?</h2>
        <p className="max-w-3xl text-muted-foreground">
          Online tools save time by providing instant results without requiring
          downloads or installations. They are accessible from anywhere and help
          improve productivity.
        </p>
      </section>
    </div>
  );
};

export default Home;
