"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { removeDuplicateLines } from "@/lib/textUtils";

const DuplicateLineRemoverTool = () => {
  return <TransformerTool transformFn={removeDuplicateLines} />;
};

export default DuplicateLineRemoverTool;
