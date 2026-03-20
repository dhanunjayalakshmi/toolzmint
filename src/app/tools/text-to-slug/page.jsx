import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import TextToSlugTool from "./TextToSlugTool";

const tool = tools?.find((tool) => tool.slug === "text-to-slug");

export const metadata = {
  title: tool?.metaTitle,
  description: tool?.metaDescription,
};

const Page = () => {
  return (
    <ToolLayout title={tool?.name} description={tool?.description}>
      <TextToSlugTool />
    </ToolLayout>
  );
};

export default Page;
