import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import LineBreakRemoverTool from "./LineBreakRemoverTool";

const tool = tools?.find((tool) => tool.slug === "line-break-remover");

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
      <LineBreakRemoverTool />
    </ToolLayout>
  );
};

export default Page;
