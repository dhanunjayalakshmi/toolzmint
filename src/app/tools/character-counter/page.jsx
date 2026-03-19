import ToolLayout from "@/app/components/ToolLayout";
import CharacterCounterTool from "./CharacterCounterTool";

export const metadata = {
  title: "Character Counter - Count Characters Online",
  description:
    "Free online character counter tool. Count characters instantly with this simple and fast tool.",
};

const Page = () => {
  return (
    <ToolLayout
      title="Character Counter"
      description="Count characters in your text instantly."
    >
      <CharacterCounterTool />
    </ToolLayout>
  );
};

export default Page;
