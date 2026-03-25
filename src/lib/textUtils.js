export const removeExtraSpaces = (text) => {
  return text.replace(/\s+/g, " ").trim();
};

export const generatePassword = ({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
  excludeSimilar,
}) => {
  let chars = "";

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const sym = "!@#$%^&*()_+[]{}|;:,.<>?";

  if (lowercase) chars += lower;
  if (uppercase) chars += upper;
  if (numbers) chars += nums;
  if (symbols) chars += sym;

  if (excludeSimilar) {
    chars = chars.replace(/[lI1O0]/g, "");
  }

  if (!chars) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
};

export const getPasswordStrength = (password) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", color: "bg-red-500" };
  if (score === 2) return { label: "Medium", color: "bg-yellow-500" };
  return { label: "Strong", color: "bg-green-500" };
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

export const removeLineBreaks = (text) => {
  return text?.replace(/\n+/g, " ");
};
