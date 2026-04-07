import ToolsCatalogSearch from "@/app/components/discovery/ToolsCatalogSearch";
import { getMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";

export const metadata = getMetadata({
  title: "All Tools - Toolzmint",
  description:
    "Browse all Toolzmint tools by category and find the right utility for your task.",
  path: "/tools",
});

const Page = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <ToolsCatalogSearch tools={tools} />
    </div>
  );
};

export default Page;
