import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import LineSorterTool from "./LineSorterTool";

const tool = tools?.find((tool) => tool.slug === "line-sorter");

export const metadata = getToolMetadata(tool);

const Page = () => {
  return (
    <ToolLayout
      title={tool?.name}
      description={tool?.description}
      type={tool?.type}
      examples={tool?.examples}
    >
      <LineSorterTool />
    </ToolLayout>
  );
};

export default Page;
