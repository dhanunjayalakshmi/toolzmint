import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import NumberBaseConverterTool from "./NumberBaseConverterTool";

const tool = tools?.find((t) => t.slug === "number-base-converter");

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
      relatedToolSlugs={tool?.relatedToolSlugs}
    >
      <NumberBaseConverterTool />
    </ToolLayout>
  );
};

export default Page;
