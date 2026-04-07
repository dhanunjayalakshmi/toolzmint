import ToolLayout from "@/app/components/ToolLayout";
import CaseConverterTool from "./CaseConverterTool";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";

const tool = tools?.find((tool) => tool.slug === "case-converter");

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
      <CaseConverterTool />
    </ToolLayout>
  );
};

export default Page;
