"use client";

import TransformerTool from "@/app/components/tools/TransformerTool";
import { textToSlug } from "@/lib/textUtils";

const TextToSlugTool = () => {
  return (
    <TransformerTool
      transformFn={textToSlug}
      inputLabel="Text"
      outputLabel="Slug"
      inputPlaceholder="Type a title or phrase like My First Blog Post..."
      outputPlaceholder="SEO-friendly slug will appear here..."
      helperText="Text is lowercased, spaced words become hyphenated, and special characters are removed."
    />
  );
};

export default TextToSlugTool;
