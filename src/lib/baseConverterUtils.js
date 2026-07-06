export const BASES = [
  { base: 2,  label: "BIN", name: "Binary",      placeholder: "e.g. 101010" },
  { base: 8,  label: "OCT", name: "Octal",       placeholder: "e.g. 52"     },
  { base: 10, label: "DEC", name: "Decimal",     placeholder: "e.g. 42"     },
  { base: 16, label: "HEX", name: "Hexadecimal", placeholder: "e.g. 2A"     },
];

const INVALID_CHARS = {
  2:  /[^01]/g,
  8:  /[^0-7]/g,
  10: /[^0-9]/g,
  16: /[^0-9a-fA-F]/g,
};

export function sanitizeInput(text, base) {
  return text.replace(INVALID_CHARS[base] ?? /[^0-9]/g, "");
}

export function parseBase(str, base) {
  if (!str) return null;
  try {
    switch (base) {
      case 2:  return BigInt("0b" + str);
      case 8:  return BigInt("0o" + str);
      case 10: return BigInt(str);
      case 16: return BigInt("0x" + str);
      default: return null;
    }
  } catch {
    return null;
  }
}

export function convertAll(bigintValue) {
  return {
    2:  bigintValue.toString(2),
    8:  bigintValue.toString(8),
    10: bigintValue.toString(10),
    16: bigintValue.toString(16).toUpperCase(),
  };
}

export function getUpdatedValues(prev, changedBase, sanitized) {
  const parsed = parseBase(sanitized, changedBase);
  if (parsed === null) return { ...prev, [changedBase]: sanitized };
  return { ...convertAll(parsed), [changedBase]: sanitized };
}
