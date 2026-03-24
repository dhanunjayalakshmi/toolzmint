import ToolLayout from "@/app/components/ToolLayout";
import CaseConverterTool from "./CaseConverterTool";
import { tools } from "@/lib/toolsConfig";

const tool = tools?.find((tool) => tool.slug === "case-converter");

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
      <CaseConverterTool />
    </ToolLayout>
  );
};

export default Page;
