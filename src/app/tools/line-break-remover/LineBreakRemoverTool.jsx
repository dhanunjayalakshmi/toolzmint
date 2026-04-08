"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { removeLineBreaks } from "@/lib/textUtils";

const LineBreakRemoverTool = () => {
  return (
    <TransformerTool
      transformFn={removeLineBreaks}
      inputLabel="Text with Line Breaks"
      outputLabel="Single-Line Text"
      inputPlaceholder="Paste text from emails, PDFs, websites, or documents here..."
      outputPlaceholder="Cleaned text without line breaks will appear here..."
      helperText="Line breaks and paragraph breaks are removed while keeping the text readable."
    />
  );
};

export default LineBreakRemoverTool;
