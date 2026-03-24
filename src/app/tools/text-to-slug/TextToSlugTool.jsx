"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { textToSlug } from "@/lib/textUtils";

const TextToSlugTool = () => {
  return <TransformerTool transformFn={textToSlug} />;
};

export default TextToSlugTool;
