import ToolLayout from "@/app/components/ToolLayout";
import { tools } from "@/lib/toolsConfig";
import RemoveExtraSpacesTool from "./RemoveExtraSpacesTool";

const tool = tools?.find((tool) => tool.slug === "remove-extra-spaces");

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
      <RemoveExtraSpacesTool />
    </ToolLayout>
  );
};

export default Page;
