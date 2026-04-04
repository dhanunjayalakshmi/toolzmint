"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import ToolGroupSection from "@/app/components/discovery/ToolGroupSection";
import ToolSearchInput from "@/app/components/discovery/ToolSearchInput";
import { getToolGroups, searchTools } from "@/lib/toolDiscovery";

const ToolsCatalogSearch = ({ tools }) => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const filteredTools = useMemo(
    () => searchTools(tools, deferredQuery),
    [tools, deferredQuery],
  );
  const toolGroups = useMemo(() => getToolGroups(filteredTools), [filteredTools]);
  const hasQuery = deferredQuery.trim().length > 0;

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">All Tools</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Browse the full Toolzmint library by category or search directly
            when you already know what you need.
          </p>
        </div>

        <ToolSearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search every tool by name or use case..."
        />

        {toolGroups.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {toolGroups.map((group) => (
              <Link
                key={group.type}
                href={`#${group.type}`}
                className="rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
              >
                {group.label} ({group.count})
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] bg-muted/55 p-6 text-sm text-muted-foreground shadow-sm shadow-black/5">
            No tools matched your search. Try a broader keyword.
          </div>
        )}

        {hasQuery && toolGroups.length > 0 ? (
          <p className="text-sm text-muted-foreground">
            Showing {filteredTools.length} matching tool
            {filteredTools.length === 1 ? "" : "s"}.
          </p>
        ) : null}
      </section>

      {toolGroups.length > 0 ? (
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
      ) : null}
    </div>
  );
};

export default ToolsCatalogSearch;
