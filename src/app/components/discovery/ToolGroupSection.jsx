import ToolDiscoveryCard from "./ToolDiscoveryCard";

const ToolGroupSection = ({ title, description, tools, compact = false, id }) => {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
      </div>

      <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
        {tools.map((tool) => (
          <ToolDiscoveryCard key={tool.slug} tool={tool} compact={compact} />
        ))}
      </div>
    </section>
  );
};

export default ToolGroupSection;
