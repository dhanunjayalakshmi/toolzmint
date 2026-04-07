import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import UrlEncoderDecoderTool from "./UrlEncoderDecoderTool";

const tool = tools?.find((tool) => tool.slug === "url-encoder-decoder");

export const metadata = getToolMetadata(tool);

const Page = () => {
  return (
    <ToolLayout
      title={tool?.name}
      description={tool?.description}
      type={tool?.type}
      examples={tool?.examples}
      aboutText={tool?.aboutText}
      howToSteps={tool?.howToSteps}
      seoSections={tool?.seoSections}
      faqItems={tool?.faqItems}
    >
      <UrlEncoderDecoderTool />
    </ToolLayout>
  );
};

export default Page;
