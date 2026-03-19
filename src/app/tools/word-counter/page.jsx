import ToolLayout from "@/app/components/ToolLayout";
import WordCounterTool from "./WordCounterTool";
import { tools } from "@/lib/toolsConfig";

const tool = tools?.find((tool) => tool.slug === "word-counter");

export const metadata = {
  title: tool?.metaTitle,
  description: tool?.metaDescription,
};

const Page = () => {
  return (
    <ToolLayout title={tool?.name} description={tool?.description}>
      <WordCounterTool />
    </ToolLayout>
  );
};

export default Page;
