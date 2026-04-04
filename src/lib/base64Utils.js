const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const bytesToBinaryString = (bytes) => {
  return Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
};

const binaryStringToBytes = (binary) => {
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
};

export const encodeBase64Text = (input) => {
  if (!input) {
    return {
      output: "",
      error: "",
      isValid: false,
      stats: null,
    };
  }

  const encoded = btoa(bytesToBinaryString(textEncoder.encode(input)));

  return {
    output: encoded,
    error: "",
    isValid: true,
    stats: {
      inputCharacters: input.length,
      outputCharacters: encoded.length,
    },
  };
};

export const decodeBase64Text = (input) => {
  if (!input.trim()) {
    return {
      output: "",
      error: "",
      isValid: false,
      stats: null,
    };
  }

  try {
    const sanitized = input.replace(/\s+/g, "");
    const decoded = textDecoder.decode(binaryStringToBytes(atob(sanitized)));

    return {
      output: decoded,
      error: "",
      isValid: true,
      stats: {
        inputCharacters: sanitized.length,
        outputCharacters: decoded.length,
      },
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid Base64 input",
      isValid: false,
      stats: null,
    };
  }
};
