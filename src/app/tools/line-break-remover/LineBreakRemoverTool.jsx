"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { removeLineBreaks } from "@/lib/textUtils";

const LineBreakRemoverTool = () => {
  return <TransformerTool transformFn={removeLineBreaks} />;
};

export default LineBreakRemoverTool;
