import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import WordDuplicatorTool from "./WordDuplicatorTool";

const tool = tools?.find((tool) => tool.slug === "word-duplicator");

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
      <WordDuplicatorTool />
    </ToolLayout>
  );
};

export default Page;
