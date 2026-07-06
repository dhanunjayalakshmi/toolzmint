import ToolLayout from "@/app/components/ToolLayout";
import { getToolMetadata } from "@/lib/metadata";
import { tools } from "@/lib/toolsConfig";
import MarkdownPreviewerTool from "./MarkdownPreviewerTool";

const tool = tools?.find((tool) => tool.slug === "markdown-previewer");

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
      <MarkdownPreviewerTool />
    </ToolLayout>
  );
};

export default Page;
