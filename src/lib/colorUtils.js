function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

export function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  if (clean.length === 3) {
    return {
      r: parseInt(clean[0] + clean[0], 16),
      g: parseInt(clean[1] + clean[1], 16),
      b: parseInt(clean[2] + clean[2], 16),
    };
  }
  if (clean.length === 6) {
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16),
    };
  }
  return null;
}

export function rgbToHex({ r, g, b }) {
  return (
    "#" +
    [r, g, b]
      .map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

export function rgbToHsl({ r, g, b }) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;

  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  switch (max) {
    case rn: h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6; break;
    case gn: h = ((bn - rn) / d + 2) / 6; break;
    default: h = ((rn - gn) / d + 4) / 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToRgb({ h, s, l }) {
  const sn = s / 100, ln = l / 100;

  if (sn === 0) {
    const v = Math.round(ln * 255);
    return { r: v, g: v, b: v };
  }

  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
  const p = 2 * ln - q;
  const hn = h / 360;

  const hue = (t) => {
    const tt = ((t % 1) + 1) % 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };

  return {
    r: Math.round(hue(hn + 1 / 3) * 255),
    g: Math.round(hue(hn) * 255),
    b: Math.round(hue(hn - 1 / 3) * 255),
  };
}

function parseRgbValues(str) {
  const m = str.match(/(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
  if (!m) return null;
  const [r, g, b] = [+m[1], +m[2], +m[3]];
  if ([r, g, b].some((v) => v > 255)) return null;
  return { r, g, b };
}

function parseHslValues(str) {
  const m = str.match(/(\d+\.?\d*)[,\s]+(\d+\.?\d*)%?[,\s]+(\d+\.?\d*)%?/);
  if (!m) return null;
  const h = +m[1], s = +m[2], l = +m[3];
  if (h > 360 || s > 100 || l > 100) return null;
  return { h, s, l };
}

export function parseColor(input) {
  const s = input.trim();
  if (!s) return null;

  // HEX
  const hexCandidate = s.startsWith("#") ? s : /^[0-9a-fA-F]{3,6}$/.test(s) ? "#" + s : null;
  if (hexCandidate) {
    const rgb = hexToRgb(hexCandidate);
    if (rgb) return { format: "hex", rgb };
  }

  // RGB (explicit keyword or 3 numbers without %)
  if (/rgb/i.test(s) || (/^\d/.test(s) && !s.includes("%"))) {
    const rgb = parseRgbValues(s);
    if (rgb) return { format: "rgb", rgb };
  }

  // HSL
  if (/hsl/i.test(s) || s.includes("%")) {
    const hsl = parseHslValues(s);
    if (hsl) return { format: "hsl", rgb: hslToRgb(hsl) };
  }

  return null;
}

export function formatHex(rgb) {
  return rgbToHex(rgb).toUpperCase();
}

export function formatRgb({ r, g, b }) {
  return `rgb(${r}, ${g}, ${b})`;
}

export function formatHsl({ h, s, l }) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}
