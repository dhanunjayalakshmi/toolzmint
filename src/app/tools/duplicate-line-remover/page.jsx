import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import DuplicateLineRemoverTool from "./DuplicateLineRemoverTool";

const tool = tools?.find((tool) => tool.slug === "duplicate-line-remover");

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
      <DuplicateLineRemoverTool />
    </ToolLayout>
  );
};

export default Page;
