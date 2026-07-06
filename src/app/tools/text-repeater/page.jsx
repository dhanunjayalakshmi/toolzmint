import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import TextRepeaterTool from "./TextRepeatorTool";

const tool = tools?.find((tool) => tool.slug === "text-repeater");

export const metadata = getToolMetadata(tool);

const Page = () => {
  return (
    <ToolLayout
      slug={tool?.slug}
      title={tool?.name}
      description={tool?.description}
      type={tool?.type}
      examples={tool?.examples}
    >
      <TextRepeaterTool />
    </ToolLayout>
  );
};

export default Page;
