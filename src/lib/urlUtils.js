export const MODE_ENCODE = "encode";
export const MODE_DECODE = "decode";

export const processUrlInput = (input, mode = MODE_ENCODE) => {
  const trimmedInput = input.trim();

  if (!trimmedInput) {
    return {
      output: "",
      error: "",
      isValid: false,
      stats: null,
    };
  }

  try {
    const output =
      mode === MODE_ENCODE
        ? encodeURIComponent(input)
        : decodeURIComponent(trimmedInput);

    return {
      output,
      error: "",
      isValid: true,
      stats: {
        inputCharacters: input.length,
        outputCharacters: output.length,
      },
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid URL input",
      isValid: false,
      stats: null,
    };
  }
};
