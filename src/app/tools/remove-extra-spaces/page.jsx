import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import RemoveExtraSpacesTool from "./RemoveExtraSpacesTool";

const tool = tools?.find((tool) => tool.slug === "remove-extra-spaces");

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
      <RemoveExtraSpacesTool />
    </ToolLayout>
  );
};

export default Page;
