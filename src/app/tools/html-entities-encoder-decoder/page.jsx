import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import HtmlEntitiesEncoderDecoderTool from "./HtmlEntitiesEncoderDecoderTool";

const tool = tools?.find((t) => t.slug === "html-entities-encoder-decoder");

export const metadata = getToolMetadata(tool);

const Page = () => {
  return (
    <ToolLayout
      slug={tool?.slug}
      title={tool?.name}
      description={tool?.description}
      type={tool?.type}
      examples={tool?.examples}
      aboutText={tool?.aboutText}
      howToSteps={tool?.howToSteps}
      seoSections={tool?.seoSections}
      faqItems={tool?.faqItems}
      relatedToolSlugs={tool?.relatedToolSlugs}
    >
      <HtmlEntitiesEncoderDecoderTool />
    </ToolLayout>
  );
};

export default Page;
