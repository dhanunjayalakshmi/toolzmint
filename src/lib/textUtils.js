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
