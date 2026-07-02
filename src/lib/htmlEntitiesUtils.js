const NAMED_ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  copy: "©", reg: "®", trade: "™", euro: "€", pound: "£", yen: "¥",
  cent: "¢", deg: "°", plusmn: "±", times: "×", divide: "÷",
  frac12: "½", frac14: "¼", frac34: "¾", mdash: "—", ndash: "–",
  laquo: "«", raquo: "»", lsquo: "‘", rsquo: "’",
  ldquo: "“", rdquo: "”", bull: "•", hellip: "…",
  prime: "′", Prime: "″", infin: "∞", sum: "∑", prod: "∏",
  radic: "√", ne: "≠", le: "≤", ge: "≥", asymp: "≈",
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε",
  pi: "π", sigma: "σ", omega: "ω", mu: "μ",
};

export function encodeHtmlEntities(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function decodeHtmlEntities(str) {
  return str
    .replace(/&([a-zA-Z]+);/g, (match, name) => NAMED_ENTITIES[name] ?? match)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    );
}
