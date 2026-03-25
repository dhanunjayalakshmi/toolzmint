import ToolLayout from "@/app/components/ToolLayout";
import JsonFormatterTool from "./JsonFormatterTool";
import { tools } from "@/lib/toolsConfig";

const tool = tools?.find((tool) => tool.slug === "json-formatter");

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
      <JsonFormatterTool />
    </ToolLayout>
  );
};

export default Page;
