export const MODE_FORMAT = "format";
export const MODE_MINIFY = "minify";

export const processJsonInput = (input, mode = MODE_FORMAT) => {
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
    const parsed = JSON.parse(trimmedInput);
    const output =
      mode === MODE_MINIFY
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, 2);

    return {
      output,
      error: "",
      isValid: true,
      stats: {
        characters: output.length,
        lines: output.split("\n").length,
      },
    };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid JSON",
      isValid: false,
      stats: null,
    };
  }
};
