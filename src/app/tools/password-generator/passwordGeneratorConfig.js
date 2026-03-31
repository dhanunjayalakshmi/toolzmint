export const STORAGE_KEY = "toolzmint-password-generator-settings";

export const MODE_PASSWORD = "password";
export const MODE_PASSPHRASE = "passphrase";

export const DEFAULT_OPTIONS = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
  excludeSimilar: false,
};

export const OPTION_LABELS = {
  uppercase: "Uppercase",
  lowercase: "Lowercase",
  numbers: "Numbers",
  symbols: "Symbols",
  excludeSimilar: "Exclude Similar",
};

export const CHARACTER_OPTION_KEYS = [
  "uppercase",
  "lowercase",
  "numbers",
  "symbols",
];

export const PASSWORD_PRESETS = [
  {
    id: "strong",
    label: "Strong Default",
    length: 16,
    options: { ...DEFAULT_OPTIONS, symbols: true },
  },
  {
    id: "easy",
    label: "Easy to Type",
    length: 14,
    options: { ...DEFAULT_OPTIONS, excludeSimilar: true },
  },
  {
    id: "max",
    label: "Max Security",
    length: 24,
    options: { ...DEFAULT_OPTIONS, symbols: true, excludeSimilar: true },
  },
  {
    id: "pin",
    label: "PIN",
    mode: MODE_PASSWORD,
    length: 6,
    options: {
      uppercase: false,
      lowercase: false,
      numbers: true,
      symbols: false,
      excludeSimilar: false,
    },
  },
];

export const DEFAULT_SETTINGS = {
  length: 12,
  mode: MODE_PASSWORD,
  options: DEFAULT_OPTIONS,
};
