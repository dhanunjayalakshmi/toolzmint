import ToolLayout from "@/app/components/ToolLayout";
import WordCounterTool from "./WordCounterTool";

export const metadata = {
  title: "Word Counter - Count Words, Characters & Sentences Online",
  description:
    "Free online word counter tool. Count words, characters, and sentences instantly. Simple, fast, and accurate.",
};

const Page = () => {
  return (
    <ToolLayout
      title="Word Counter"
      description="Count words, characters, and sentences instantly."
    >
      <WordCounterTool />
    </ToolLayout>
  );
};

export default Page;
