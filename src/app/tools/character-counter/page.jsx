import ToolLayout from "@/app/components/ToolLayout";
import CharacterCounterTool from "./CharacterCounterTool";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";

const tool = tools?.find((tool) => tool.slug === "character-counter");

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
      <CharacterCounterTool />
    </ToolLayout>
  );
};

export default Page;
