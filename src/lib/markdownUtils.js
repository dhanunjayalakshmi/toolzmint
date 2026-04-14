const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const looksLikeHtml = (value) =>
  /^<([a-z][\w-]*)(\s[^>]*)?>/i.test(value) && /<\/([a-z][\w-]*)>/i.test(value);

const renderInlineMarkdown = (value) => {
  const escaped = escapeHtml(value);

  return escaped
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>")
    .replace(/(^|[^_])_([^_]+)_(?!_)/g, "$1<em>$2</em>");
};

const closeList = (listType, htmlParts) => {
  if (listType) {
    htmlParts.push(`</${listType}>`);
  }

  return null;
};

export const renderMarkdownPreview = (markdown) => {
  const trimmed = markdown.trim();

  if (!trimmed) {
    return {
      html: "",
      error: "",
      isValid: true,
      stats: {
        lines: 0,
        words: 0,
        characters: 0,
      },
    };
  }

  if (looksLikeHtml(trimmed)) {
    return {
      html: "",
      error: "HTML input is not supported. Paste markdown syntax instead.",
      isValid: false,
      stats: {
        lines: markdown.replace(/\r\n/g, "\n").split("\n").length,
        words: trimmed.split(/\s+/).filter(Boolean).length,
        characters: markdown.length,
      },
    };
  }

  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const htmlParts = [];
  let currentListType = null;
  let inCodeBlock = false;
  let codeLines = [];

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      currentListType = closeList(currentListType, htmlParts);

      if (inCodeBlock) {
        htmlParts.push(
          `<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`,
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }

      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      currentListType = closeList(currentListType, htmlParts);
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      currentListType = closeList(currentListType, htmlParts);
      const level = headingMatch[1].length;
      htmlParts.push(
        `<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`,
      );
      continue;
    }

    if (/^---+$/.test(line.trim()) || /^\*\*\*+$/.test(line.trim())) {
      currentListType = closeList(currentListType, htmlParts);
      htmlParts.push("<hr />");
      continue;
    }

    const blockquoteMatch = line.match(/^>\s?(.*)$/);
    if (blockquoteMatch) {
      currentListType = closeList(currentListType, htmlParts);
      htmlParts.push(
        `<blockquote><p>${renderInlineMarkdown(blockquoteMatch[1])}</p></blockquote>`,
      );
      continue;
    }

    const unorderedMatch = line.match(/^[-*]\s+(.*)$/);
    if (unorderedMatch) {
      if (currentListType !== "ul") {
        currentListType = closeList(currentListType, htmlParts);
        currentListType = "ul";
        htmlParts.push("<ul>");
      }

      htmlParts.push(`<li>${renderInlineMarkdown(unorderedMatch[1])}</li>`);
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      if (currentListType !== "ol") {
        currentListType = closeList(currentListType, htmlParts);
        currentListType = "ol";
        htmlParts.push("<ol>");
      }

      htmlParts.push(`<li>${renderInlineMarkdown(orderedMatch[1])}</li>`);
      continue;
    }

    currentListType = closeList(currentListType, htmlParts);
    htmlParts.push(`<p>${renderInlineMarkdown(line)}</p>`);
  }

  currentListType = closeList(currentListType, htmlParts);

  if (inCodeBlock) {
    htmlParts.push(
      `<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`,
    );
  }

  return {
    html: htmlParts.join(""),
    error: "",
    isValid: true,
    stats: {
      lines: lines.length,
      words: trimmed.split(/\s+/).filter(Boolean).length,
      characters: markdown.length,
    },
  };
};
