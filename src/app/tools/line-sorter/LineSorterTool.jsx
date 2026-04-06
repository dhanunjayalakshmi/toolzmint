"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { sortLines } from "@/lib/textUtils";

const LineSorterTool = () => {
  return (
    <TransformerTool
      transformFn={sortLines}
      inputLabel="Unsorted Lines"
      outputLabel="Sorted Lines"
      inputPlaceholder="Paste one item per line to sort them alphabetically..."
      outputPlaceholder="Sorted lines will appear here..."
      helperText="Lines are sorted alphabetically from top to bottom."
    />
  );
};

export default LineSorterTool;
