export const removeExtraSpaces = (text) => {
  return text.replace(/\s+/g, " ").trim();
};

export const toUpperCase = (text) => text.toUpperCase();

export const toLowerCase = (text) => text.toLowerCase();

export const toTitleCase = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
    .join(" ");
};

export const reverseText = (text) => {
  return text.split("").reverse().join("");
};

export const removeDuplicateLines = (text) => {
  return [...new Set(text.split("\n"))].join("\n");
};

export const sortLines = (text) => {
  return text.split("\n").sort().join("\n");
};

export const generateRandomString = (length = 10) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)],
  ).join("");
};

export const duplicateWords = (text) => {
  return text
    .split(" ")
    .map((word) => word + " " + word)
    .join(" ");
};

export const textToSlug = (text) => {
  const formattedText = text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "");

  return formattedText;
};
