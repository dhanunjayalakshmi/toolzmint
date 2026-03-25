import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import TextRepeaterTool from "./TextRepeatorTool";

const tool = tools?.find((tool) => tool.slug === "text-repeater");

export const metadata = {
  title: tool?.metaTitle,
  description: tool?.metaDescription,
};

const Page = () => {
  return (
    <ToolLayout
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
