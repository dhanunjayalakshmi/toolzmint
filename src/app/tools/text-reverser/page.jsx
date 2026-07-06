import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import TextReverserTool from "./TextReverserTool";

const tool = tools?.find((tool) => tool.slug === "text-reverser");

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
      <TextReverserTool />
    </ToolLayout>
  );
};

export default Page;
