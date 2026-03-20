import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import LineSorterTool from "./LineSorterTool";

const tool = tools?.find((tool) => tool.slug === "line-sorter");

export const metadata = {
  title: tool?.metaTitle,
  description: tool?.metaDescription,
};

const Page = () => {
  return (
    <ToolLayout title={tool?.name} description={tool?.description}>
      <LineSorterTool />
    </ToolLayout>
  );
};

export default Page;
