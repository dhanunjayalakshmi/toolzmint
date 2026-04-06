"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { reverseText } from "@/lib/textUtils";

const TextReverserTool = () => {
  return (
    <TransformerTool
      transformFn={reverseText}
      inputLabel="Original Text"
      outputLabel="Reversed Text"
      inputPlaceholder="Type or paste text you want to reverse..."
      outputPlaceholder="Reversed text will appear here..."
      helperText="The full text is reversed instantly, including spaces and punctuation."
    />
  );
};

export default TextReverserTool;
