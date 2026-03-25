import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import UrlEncoderDecoderTool from "./UrlEncoderDecoderTool";

const tool = tools?.find((tool) => tool.slug === "url-encoder-decoder");

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
      <UrlEncoderDecoderTool />
    </ToolLayout>
  );
};

export default Page;
