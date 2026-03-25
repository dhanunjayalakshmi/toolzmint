import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import PasswordGeneratorTool from "./PasswordGeneratorTool";

const tool = tools?.find((tool) => tool.slug === "password-generator");

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
      <PasswordGeneratorTool />
    </ToolLayout>
  );
};

export default Page;
