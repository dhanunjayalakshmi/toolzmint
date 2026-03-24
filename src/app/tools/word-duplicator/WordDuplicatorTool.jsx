"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { duplicateWords } from "@/lib/textUtils";

const WordDuplicatorTool = () => {
  return <TransformerTool transformFn={duplicateWords} />;
};

export default WordDuplicatorTool;
