import Link from "next/link";

const ToolDiscoveryCard = ({ tool, compact = false }) => {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={`group block cursor-pointer rounded-3xl bg-card p-4 shadow-sm shadow-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/8 ${compact ? "space-y-2" : "space-y-3"}`}
    >
      <div className="space-y-1">
        <h3
          className={`${compact ? "text-base" : "text-lg"} font-semibold tracking-tight`}
        >
          {tool.name}
        </h3>
        <p
          className={`${compact ? "text-sm" : "text-sm"} text-muted-foreground`}
        >
          {tool.description}
        </p>
      </div>

      <p className="text-xs font-medium text-primary transition-transform group-hover:translate-x-0.5">
        Open tool
      </p>
    </Link>
  );
};

export default ToolDiscoveryCard;
