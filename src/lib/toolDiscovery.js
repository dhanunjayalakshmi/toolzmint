export const TOOL_TYPE_ORDER = [
  "generator",
  "analyzer",
  "transformer",
  "modifier",
];

export const TOOL_TYPE_PRESENTATION = {
  generator: {
    label: "Generators",
    description: "Create passwords, repeated text, and random strings quickly.",
  },
  analyzer: {
    label: "Analyzers",
    description: "Measure words, characters, and other text stats instantly.",
  },
  transformer: {
    label: "Transformers",
    description: "Clean, reshape, and format text with minimal effort.",
  },
  modifier: {
    label: "Modifiers",
    description: "Encode, decode, and switch text into the format you need.",
  },
};

export const FEATURED_TOOL_SLUGS = [
  "password-generator",
  "word-counter",
  "json-formatter",
  "text-repeater",
];

export const getFeaturedTools = (tools) => {
  const featuredSet = new Set(FEATURED_TOOL_SLUGS);

  return FEATURED_TOOL_SLUGS.map((slug) =>
    tools.find((tool) => tool.slug === slug),
  ).filter(Boolean);
};

export const getToolGroups = (tools, perGroupLimit) => {
  return TOOL_TYPE_ORDER.map((type) => {
    const toolsForType = tools.filter((tool) => tool.type === type);
    const visibleTools =
      typeof perGroupLimit === "number"
        ? toolsForType.slice(0, perGroupLimit)
        : toolsForType;

    return {
      type,
      ...TOOL_TYPE_PRESENTATION[type],
      count: toolsForType.length,
      tools: visibleTools,
    };
  }).filter((group) => group.count > 0);
};
