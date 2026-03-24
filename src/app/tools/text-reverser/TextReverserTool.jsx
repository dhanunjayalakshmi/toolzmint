"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { reverseText } from "@/lib/textUtils";

const TextReverserTool = () => {
  return <TransformerTool transformFn={reverseText} />;
};

export default TextReverserTool;
