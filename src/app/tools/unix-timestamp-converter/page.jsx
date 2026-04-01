import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import UnixTimestampConverterTool from "./UnixTimestampConverterTool";

const tool = tools?.find((tool) => tool.slug === "unix-timestamp-converter");

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
      <UnixTimestampConverterTool />
    </ToolLayout>
  );
};

export default Page;
