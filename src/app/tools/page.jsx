import ToolsCatalogSearch from "@/app/components/discovery/ToolsCatalogSearch";
import { tools } from "@/lib/toolsConfig";

const Page = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <ToolsCatalogSearch tools={tools} />
    </div>
  );
};

export default Page;
