export const DELIMITERS = [
  { id: ",",  label: "Comma"     },
  { id: ";",  label: "Semicolon" },
  { id: "\t", label: "Tab"       },
];

function escapeField(value, delimiter) {
  if (value === null || value === undefined) return "";
  const str = typeof value === "object" ? JSON.stringify(value) : String(value);
  if (str.includes(delimiter) || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

export function jsonToCsv(jsonText, { delimiter = ",", includeHeaders = true } = {}) {
  if (!jsonText.trim()) return { output: "", error: null, stats: null };

  let data;
  try {
    data = JSON.parse(jsonText);
  } catch (e) {
    return { output: "", error: "Invalid JSON: " + e.message, stats: null };
  }

  if (!Array.isArray(data)) {
    if (typeof data === "object" && data !== null) {
      data = [data];
    } else {
      return { output: "", error: "Input must be a JSON object or an array of objects.", stats: null };
    }
  }

  if (data.length === 0) {
    return { output: "", error: null, stats: { rows: 0, columns: 0 } };
  }

  // Collect all keys across every row so missing keys become empty cells
  const keys = [...new Set(data.flatMap((row) =>
    typeof row === "object" && row !== null ? Object.keys(row) : []
  ))];

  if (keys.length === 0) {
    return { output: "", error: "No object keys found to convert.", stats: null };
  }

  const lines = [];
  if (includeHeaders) {
    lines.push(keys.map((k) => escapeField(k, delimiter)).join(delimiter));
  }

  for (const row of data) {
    if (typeof row !== "object" || row === null) {
      lines.push(keys.map(() => "").join(delimiter));
    } else {
      lines.push(keys.map((k) => escapeField(row[k], delimiter)).join(delimiter));
    }
  }

  return {
    output: lines.join("\n"),
    error: null,
    stats: { rows: data.length, columns: keys.length },
  };
}
