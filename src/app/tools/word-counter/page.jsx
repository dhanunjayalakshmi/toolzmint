import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import WordCounterTool from "./WordCounterTool";

const tool = tools?.find((tool) => tool.slug === "word-counter");

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
    >
      <WordCounterTool />
    </ToolLayout>
  );
};

export default Page;
