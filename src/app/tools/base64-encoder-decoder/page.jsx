import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import Base64EncoderDecoderTool from "./Base64EncoderDecoderTool";

const tool = tools?.find((tool) => tool.slug === "base64-encoder-decoder");

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
      aboutText={tool?.aboutText}
      howToSteps={tool?.howToSteps}
      seoSections={tool?.seoSections}
      faqItems={tool?.faqItems}
    >
      <Base64EncoderDecoderTool />
    </ToolLayout>
  );
};

export default Page;
