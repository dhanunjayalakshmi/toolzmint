const PASSPHRASE_WORDS = [
  "amber",
  "anchor",
  "apricot",
  "atlas",
  "bamboo",
  "breeze",
  "canyon",
  "cedar",
  "cinder",
  "cobalt",
  "comet",
  "coral",
  "dawn",
  "delta",
  "ember",
  "fern",
  "fjord",
  "glimmer",
  "harbor",
  "hazel",
  "iris",
  "juniper",
  "kite",
  "lagoon",
  "lantern",
  "maple",
  "meadow",
  "meridian",
  "mist",
  "nova",
  "oak",
  "onyx",
  "orbit",
  "pebble",
  "pine",
  "pixel",
  "quartz",
  "raven",
  "reef",
  "river",
  "sage",
  "shadow",
  "solstice",
  "sparrow",
  "summit",
  "thunder",
  "timber",
  "topaz",
  "velvet",
  "willow",
];

const getRandomIndex = (length) => Math.floor(Math.random() * length);

export const generatePassword = ({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
  excludeSimilar,
  seed = 0,
}) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const sym = "!@#$%^&*()_+[]{}|;:,.<>?";
  const selectedGroups = [];
  const sanitizeGroup = (group) =>
    excludeSimilar ? group.replace(/[lI1O0]/g, "") : group;

  if (lowercase) selectedGroups.push(sanitizeGroup(lower));
  if (uppercase) selectedGroups.push(sanitizeGroup(upper));
  if (numbers) selectedGroups.push(sanitizeGroup(nums));
  if (symbols) selectedGroups.push(sanitizeGroup(sym));

  const availableGroups = selectedGroups.filter(Boolean);

  if (!availableGroups.length) return "";

  const safeLength = Math.max(length, availableGroups.length);
  const allChars = availableGroups.join("");
  const pickRandomChar = (chars) => chars[getRandomIndex(chars.length)];

  const passwordChars = availableGroups.map((group) => pickRandomChar(group));

  for (let i = passwordChars.length; i < safeLength; i++) {
    passwordChars.push(pickRandomChar(allChars));
  }

  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1 + Number(seed || 0))) % (i + 1);
    [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
  }

  return passwordChars.join("");
};

export const generatePassphrase = ({
  wordCount = 4,
  separator = "-",
  includeNumber = true,
  seed = 0,
}) => {
  const safeWordCount = Math.max(3, Number(wordCount) || 4);
  const words = Array.from({ length: safeWordCount }, () => {
    return PASSPHRASE_WORDS[getRandomIndex(PASSPHRASE_WORDS.length)];
  });

  if (includeNumber) {
    words[words.length - 1] = `${words[words.length - 1]}${100 + ((seed + getRandomIndex(900)) % 900)}`;
  }

  return words.join(separator);
};

export const getPasswordStrength = (password, mode = "password") => {
  let score = 0;
  const feedback = [];
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const uniqueChars = new Set(password).size;

  if (!password) {
    return {
      label: "Weak",
      color: "bg-red-500",
      width: "12%",
      hint: "Generate a password to see its strength.",
    };
  }

  if (mode === "passphrase") {
    const wordCount = password.split(/[-_.\s]+/).filter(Boolean).length;

    if (wordCount >= 4) score += 2;
    else feedback.push("Use at least 4 words");

    if (password.length >= 20) score += 1;
    else feedback.push("Longer phrases are harder to crack");

    if (hasNumber) score += 1;
    else feedback.push("Add a number for extra variety");

    if (uniqueChars >= 12) score += 1;
    else feedback.push("Mix less predictable words");

    if (score <= 2) {
      return {
        label: "Fair",
        color: "bg-yellow-500",
        width: "45%",
        hint: feedback[0] || "Add more words or length",
      };
    }

    return {
      label: score >= 5 ? "Excellent" : "Strong",
      color: "bg-green-500",
      width: score >= 5 ? "100%" : "80%",
      hint: feedback[0] || "Memorable and strong",
    };
  }

  if (password.length >= 16) score += 2;
  else if (password.length >= 12) score += 1;
  else feedback.push("Use 12+ characters");

  if (hasUppercase) score += 1;
  else feedback.push("Add uppercase letters");

  if (hasLowercase) score += 1;
  else feedback.push("Add lowercase letters");

  if (hasNumber) score += 1;
  else feedback.push("Add numbers");

  if (hasSymbol) score += 1;
  else feedback.push("Add symbols");

  if (uniqueChars >= Math.min(password.length, 8)) score += 1;
  else feedback.push("Increase character variety");

  if (score <= 2) {
    return {
      label: "Weak",
      color: "bg-red-500",
      width: "28%",
      hint: feedback[0] || "Too easy to guess",
    };
  }

  if (score <= 4) {
    return {
      label: "Good",
      color: "bg-yellow-500",
      width: "62%",
      hint: feedback[0] || "Solid, but could use more variety",
    };
  }

  return {
    label: score >= 7 ? "Excellent" : "Strong",
    color: "bg-green-500",
    width: score >= 7 ? "100%" : "84%",
    hint: feedback[0] || "Strong mix of length and complexity",
  };
};
