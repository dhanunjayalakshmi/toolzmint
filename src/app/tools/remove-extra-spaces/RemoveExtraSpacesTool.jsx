"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { removeExtraSpaces } from "@/lib/textUtils";
const RemoveExtraSpacesTool = () => {
  return <TransformerTool transformFn={removeExtraSpaces} />;
};

export default RemoveExtraSpacesTool;
