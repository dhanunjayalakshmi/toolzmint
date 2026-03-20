import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import RandomStringGeneratorTool from "./RandomStringGeneratorTool";

const tool = tools?.find((tool) => tool.slug === "random-string-generator");

export const metadata = {
  title: tool?.metaTitle,
  description: tool?.metaDescription,
};

const Page = () => {
  return (
    <ToolLayout title={tool?.name} description={tool?.description}>
      <RandomStringGeneratorTool />
    </ToolLayout>
  );
};

export default Page;
