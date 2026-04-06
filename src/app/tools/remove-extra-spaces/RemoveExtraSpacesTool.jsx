"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { removeExtraSpaces } from "@/lib/textUtils";
const RemoveExtraSpacesTool = () => {
  return (
    <TransformerTool
      transformFn={removeExtraSpaces}
      inputLabel="Text with Extra Spaces"
      outputLabel="Cleaned Text"
      inputPlaceholder="Paste text with extra spaces here..."
      outputPlaceholder="Text with normalized spacing will appear here..."
      helperText="Repeated spaces are removed and the text is trimmed automatically."
    />
  );
};

export default RemoveExtraSpacesTool;
