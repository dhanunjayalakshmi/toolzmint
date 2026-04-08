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
  "line-break-remover",
  "password-generator",
  "word-counter",
  "json-formatter",
  "text-to-slug",
];

export const getFeaturedTools = (tools) => {
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

export const searchTools = (tools, query) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return tools;
  }

  return tools.filter((tool) => {
    const haystack = [
      tool.name,
      tool.slug,
      tool.description,
      tool.metaTitle,
      tool.metaDescription,
      tool.type,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
};

export const getRelatedTools = ({
  tools,
  currentTitle,
  currentType,
  relatedToolSlugs = [],
  limit = 6,
}) => {
  const currentToolName = currentTitle?.trim().toLowerCase();
  const excludedTools = tools.filter(
    (tool) => tool.name.trim().toLowerCase() !== currentToolName,
  );
  const seen = new Set();
  const related = [];
  const pushUnique = (tool) => {
    if (!tool || seen.has(tool.slug)) {
      return;
    }

    seen.add(tool.slug);
    related.push(tool);
  };

  relatedToolSlugs
    .map((slug) => excludedTools.find((tool) => tool.slug === slug))
    .forEach(pushUnique);

  excludedTools
    .filter((tool) => tool.type === currentType)
    .forEach(pushUnique);

  excludedTools.forEach(pushUnique);

  return related.slice(0, limit);
};
