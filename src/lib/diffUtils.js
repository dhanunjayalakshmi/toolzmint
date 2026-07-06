import { diffLines } from "diff";

export function computeDiff(original, modified) {
  const parts = diffLines(original, modified, { newlineIsToken: false });

  let added = 0;
  let removed = 0;
  let unchanged = 0;

  const lines = [];

  for (const part of parts) {
    const partLines = part.value.replace(/\n$/, "").split("\n");
    for (const line of partLines) {
      if (part.added) {
        added++;
        lines.push({ type: "added", text: line });
      } else if (part.removed) {
        removed++;
        lines.push({ type: "removed", text: line });
      } else {
        unchanged++;
        lines.push({ type: "unchanged", text: line });
      }
    }
  }

  return { lines, stats: { added, removed, unchanged } };
}
