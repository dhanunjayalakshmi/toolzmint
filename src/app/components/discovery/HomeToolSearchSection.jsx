"use client";

import { useDeferredValue, useMemo, useState } from "react";
import ToolDiscoveryCard from "@/app/components/discovery/ToolDiscoveryCard";
import ToolGroupSection from "@/app/components/discovery/ToolGroupSection";
import ToolSearchInput from "@/app/components/discovery/ToolSearchInput";
import {
  getFeaturedTools,
  getToolGroups,
  searchTools,
} from "@/lib/toolDiscovery";

const HomeToolSearchSection = ({ tools }) => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const filteredTools = useMemo(
    () => searchTools(tools, deferredQuery),
    [tools, deferredQuery],
  );
  const featuredTools = useMemo(
    () =>
      deferredQuery.trim()
        ? filteredTools.slice(0, 4)
        : getFeaturedTools(tools),
    [tools, filteredTools, deferredQuery],
  );
  const toolGroups = useMemo(
    () => getToolGroups(filteredTools, 3),
    [filteredTools],
  );
  const hasQuery = deferredQuery.trim().length > 0;

  return (
    <>
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Find a tool faster
          </h2>
          <p className="text-sm text-muted-foreground">
            Search by tool name or what you want to do.
          </p>
        </div>

        <ToolSearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search tools like word counter, JSON formatter, password generator..."
        />
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {hasQuery ? "Matching tools" : "Start with the essentials"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {hasQuery
              ? `${filteredTools.length} tool${filteredTools.length === 1 ? "" : "s"} matched your search.`
              : "A curated set of tools people tend to use first."}
          </p>
        </div>

        {featuredTools.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {featuredTools.map((tool) => (
              <ToolDiscoveryCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] bg-muted/55 p-6 text-sm text-muted-foreground shadow-sm shadow-black/5">
            No tools matched your search yet. Try a shorter or broader term.
          </div>
        )}
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

        {toolGroups.length > 0 ? (
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
        ) : (
          <div className="rounded-[2rem] bg-muted/55 p-6 text-sm text-muted-foreground shadow-sm shadow-black/5">
            No categories to show for this search.
          </div>
        )}
      </section>
    </>
  );
};

export default HomeToolSearchSection;
