export const DELIMITERS = [
  { id: "auto", label: "Auto" },
  { id: ",", label: "Comma" },
  { id: ";", label: "Semicolon" },
  { id: "\t", label: "Tab" },
];

function detectDelimiter(text) {
  const firstLine = text.split(/\r?\n/)[0] ?? "";
  const counts = {
    ",": (firstLine.match(/,/g) ?? []).length,
    ";": (firstLine.match(/;/g) ?? []).length,
    "\t": (firstLine.match(/\t/g) ?? []).length,
  };
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function parseRawCsv(text, delimiter) {
  const rows = [];
  let current = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delimiter) {
      current.push(field);
      field = "";
    } else if (ch === "\r" && next === "\n") {
      current.push(field);
      field = "";
      rows.push(current);
      current = [];
      i++;
    } else if (ch === "\n" || ch === "\r") {
      current.push(field);
      field = "";
      rows.push(current);
      current = [];
    } else {
      field += ch;
    }
  }

  current.push(field);
  if (current.some((f) => f !== "")) rows.push(current);

  return rows;
}

export function csvToJson(text, { delimiter = "auto", hasHeader = true, pretty = true } = {}) {
  const trimmed = text.trim();
  if (!trimmed) return { output: "", stats: null, error: null };

  const resolvedDelimiter = delimiter === "auto" ? detectDelimiter(trimmed) : delimiter;
  const rows = parseRawCsv(trimmed, resolvedDelimiter);

  if (rows.length === 0) return { output: "", stats: null, error: null };

  let data;
  let headers;

  if (hasHeader) {
    headers = rows[0];
    const dataRows = rows.slice(1);
    data = dataRows.map((row) => {
      const obj = {};
      headers.forEach((key, i) => {
        obj[key || `col${i + 1}`] = row[i] ?? "";
      });
      return obj;
    });
  } else {
    data = rows.map((row) => row);
  }

  try {
    const output = JSON.stringify(data, null, pretty ? 2 : 0);
    return {
      output,
      stats: {
        rows: hasHeader ? rows.length - 1 : rows.length,
        columns: headers?.length ?? rows[0]?.length ?? 0,
        objects: data.length,
        delimiter: resolvedDelimiter === "\t" ? "Tab" : resolvedDelimiter,
      },
      error: null,
    };
  } catch {
    return { output: "", stats: null, error: "Failed to convert CSV to JSON." };
  }
}
