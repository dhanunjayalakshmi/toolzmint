import ToolLayout from "@/app/components/ToolLayout";
import CharacterCounterTool from "./CharacterCounterTool";
import { tools } from "@/lib/toolsConfig";

const tool = tools?.find((tool) => tool.slug === "character-counter");

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
      <CharacterCounterTool />
    </ToolLayout>
  );
};

export default Page;
