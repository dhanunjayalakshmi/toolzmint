"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { duplicateWords } from "@/lib/textUtils";

const WordDuplicatorTool = () => {
  return (
    <TransformerTool
      transformFn={duplicateWords}
      inputLabel="Original Text"
      outputLabel="Duplicated Text"
      inputPlaceholder="Type words or a short phrase to duplicate..."
      outputPlaceholder="Duplicated text will appear here..."
      helperText="Each word is repeated once in the output while keeping the original order."
    />
  );
};

export default WordDuplicatorTool;
