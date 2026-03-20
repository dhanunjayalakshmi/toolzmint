import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import TextReverserTool from "./TextReverserTool";

const tool = tools?.find((tool) => tool.slug === "text-reverser");

export const metadata = {
  title: tool?.metaTitle,
  description: tool?.metaDescription,
};

const Page = () => {
  return (
    <ToolLayout title={tool?.name} description={tool?.description}>
      <TextReverserTool />
    </ToolLayout>
  );
};

export default Page;
