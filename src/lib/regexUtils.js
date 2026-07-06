export const FLAGS = [
  { id: "g", label: "g", title: "Global — find all matches" },
  { id: "i", label: "i", title: "Case insensitive" },
  { id: "m", label: "m", title: "Multiline — ^ and $ match line boundaries" },
  { id: "s", label: "s", title: "Dot-all — dot matches newlines" },
];

export function testRegex(pattern, flags, testString) {
  if (!pattern) {
    return {
      matches: [],
      error: null,
      segments: testString ? [{ text: testString, isMatch: false }] : [],
    };
  }

  let regex;
  try {
    // Always add g internally so matchAll works; honour the user's flag set for display
    const internalFlags = flags.includes("g") ? flags : flags + "g";
    regex = new RegExp(pattern, internalFlags);
  } catch (e) {
    return { matches: [], error: e.message, segments: [] };
  }

  if (!testString) return { matches: [], error: null, segments: [] };

  const matches = [...testString.matchAll(regex)];

  // Build highlighted segments
  const segments = [];
  let lastIndex = 0;

  for (const match of matches) {
    if (match.index > lastIndex) {
      segments.push({ text: testString.slice(lastIndex, match.index), isMatch: false });
    }
    // Guard against zero-length matches causing infinite loops
    const matchText = match[0];
    segments.push({
      text: matchText || "​",
      isMatch: true,
      groups: match.slice(1),
      namedGroups: match.groups ?? {},
    });
    lastIndex = match.index + Math.max(matchText.length, 1);
  }

  if (lastIndex < testString.length) {
    segments.push({ text: testString.slice(lastIndex), isMatch: false });
  }

  return { matches, error: null, segments };
}
