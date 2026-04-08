const bytesToHex = (bytes) =>
  Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");

export const generateUuidV4 = ({ includeHyphens = true } = {}) => {
  if (
    typeof globalThis.crypto?.randomUUID === "function" &&
    includeHyphens
  ) {
    return globalThis.crypto.randomUUID();
  }

  const bytes = new Uint8Array(16);
  globalThis.crypto.getRandomValues(bytes);

  // UUID v4 version and variant bits.
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = bytesToHex(bytes);

  if (!includeHyphens) {
    return hex;
  }

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20),
  ].join("-");
};

export const generateUuidBatch = (
  count,
  { includeHyphens = true } = {},
) => {
  const safeCount = Number.isFinite(count)
    ? Math.min(Math.max(Math.trunc(count), 1), 50)
    : 1;

  return Array.from({ length: safeCount }, () =>
    generateUuidV4({ includeHyphens }),
  );
};
