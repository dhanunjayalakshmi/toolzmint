"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { removeDuplicateLines } from "@/lib/textUtils";

const DuplicateLineRemoverTool = () => {
  return (
    <TransformerTool
      transformFn={removeDuplicateLines}
      inputLabel="Lines with Duplicates"
      outputLabel="Unique Lines"
      inputPlaceholder="Paste lines of text with duplicates here..."
      outputPlaceholder="Duplicate-free lines will appear here..."
      helperText="Duplicate lines are removed while keeping the first occurrence of each line."
    />
  );
};

export default DuplicateLineRemoverTool;
