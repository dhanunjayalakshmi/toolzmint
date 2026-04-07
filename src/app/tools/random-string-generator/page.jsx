import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import RandomStringGeneratorTool from "./RandomStringGeneratorTool";

const tool = tools?.find((tool) => tool.slug === "random-string-generator");

export const metadata = getToolMetadata(tool);

const Page = () => {
  return (
    <ToolLayout
      title={tool?.name}
      description={tool?.description}
      type={tool?.type}
      examples={tool?.examples}
    >
      <RandomStringGeneratorTool />
    </ToolLayout>
  );
};

export default Page;
