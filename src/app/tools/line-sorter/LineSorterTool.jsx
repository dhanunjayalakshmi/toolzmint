"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { sortLines } from "@/lib/textUtils";

const LineSorterTool = () => {
  return <TransformerTool transformFn={sortLines} />;
};

export default LineSorterTool;
