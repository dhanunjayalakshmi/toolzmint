import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import AgeCalculatorTool from "./AgeCalculatorTool";

const tool = tools?.find((t) => t.slug === "age-calculator");

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
      <AgeCalculatorTool />
    </ToolLayout>
  );
};

export default Page;
