export const tools = [
  {
    slug: "password-generator",
    name: "Password Generator",
    type: "generator",
    description: "Generate secure passwords with customizable options.",
    metaTitle: "Free Password Generator - Secure Random Passwords",
    metaDescription:
      "Generate strong, secure passwords instantly with options for symbols, numbers, and more.",
    examples: [
      {
        input: "Length: 12, Uppercase, Lowercase, Numbers",
        output: "aB3kL9xQ2mP1",
      },
    ],
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    type: "analyzer",
    description: "Count words, characters, and sentences instantly.",
    metaTitle: "Word Counter - Count Words, Characters & Sentences Online",
    metaDescription:
      "Free online word counter tool. Count words, characters, and sentences instantly.",
    examples: [
      {
        input: "Hello world. This is Toolzmint!",
        output: "Words: 5, Characters: 31, Sentences: 2",
      },
    ],
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    type: "analyzer",
    description: "Count characters instantly with or without spaces.",
    metaTitle: "Character Counter - Count Characters Online",
    metaDescription:
      "Free online character counter tool. Count characters instantly.",
    examples: [
      {
        input: "Hello Toolzmint",
        output: "Characters (with spaces): 15, Characters (without spaces): 14",
      },
    ],
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    type: "transformer",
    description: "Format and validate JSON instantly.",
    metaTitle: "JSON Formatter & Validator - Format JSON Online",
    metaDescription:
      "Free online JSON formatter and validator. Beautify and validate JSON instantly.",
    examples: [
      {
        input: '{"name":"Toolzmint","type":"tool"}',
        output: '{\n  "name": "Toolzmint",\n  "type": "tool"\n}',
      },
    ],
  },
  {
    slug: "remove-extra-spaces",
    name: "Remove Extra Spaces",
    type: "transformer",
    description: "Remove extra spaces from text instantly.",
    metaTitle: "Remove Extra Spaces Online - Clean Text Tool",
    metaDescription:
      "Free online tool to remove extra spaces from text quickly and easily.",
    examples: [
      {
        input: "Hello    world   from   Toolzmint",
        output: "Hello world from Toolzmint",
      },
    ],
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    type: "modifier",
    description:
      "Convert text to uppercase, lowercase, or title case instantly.",
    metaTitle: "Case Converter - Uppercase, Lowercase, Title Case Online",
    metaDescription:
      "Free online case converter tool. Convert text to uppercase, lowercase, or title case instantly.",
    examples: [
      {
        input: "toolzmint rocks",
        output: "TOOLZMINT ROCKS / toolzmint rocks / Toolzmint Rocks",
      },
    ],
  },
  {
    slug: "url-encoder-decoder",
    name: "URL Encoder & Decoder",
    type: "modifier",
    description: "Encode or decode URLs instantly.",
    metaTitle: "URL Encoder & Decoder Online - Encode URLs Easily",
    metaDescription:
      "Free online URL encoder and decoder tool. Encode or decode URLs instantly.",
    examples: [
      {
        input: "https://toolzmint.com/tools?name=hello world",
        output: "https%3A%2F%2Ftoolzmint.com%2Ftools%3Fname%3Dhello%20world",
      },
    ],
  },
  {
    slug: "base64-encoder-decoder",
    name: "Base64 Encoder & Decoder",
    type: "modifier",
    description: "Encode or decode Base64 strings instantly.",
    metaTitle: "Base64 Encoder & Decoder Online Tool",
    metaDescription:
      "Free online Base64 encoder and decoder tool. Convert text to Base64 and back instantly.",
    examples: [
      {
        input: "Hello",
        output: "SGVsbG8=",
      },
    ],
  },
  {
    slug: "text-to-slug",
    name: "Text to Slug",
    type: "transformer",
    description: "Convert text into SEO-friendly URL slugs.",
    metaTitle: "Text to Slug Converter - Generate SEO Friendly URLs",
    metaDescription:
      "Free online tool to convert text into SEO-friendly URL slugs instantly.",
    examples: [
      {
        input: "Hello World From Toolzmint",
        output: "hello-world-from-toolzmint",
      },
    ],
  },
  {
    slug: "text-reverser",
    name: "Text Reverser",
    type: "transformer",
    description: "Reverse text instantly online.",
    metaTitle: "Text Reverser - Reverse Text Online",
    metaDescription:
      "Free online text reverser tool. Reverse words, phrases, or full text instantly.",
    examples: [
      {
        input: "Toolzmint",
        output: "tnimzlooT",
      },
    ],
  },
  {
    slug: "duplicate-line-remover",
    name: "Duplicate Line Remover",
    type: "transformer",
    description: "Remove duplicate lines from text.",
    metaTitle: "Duplicate Line Remover - Clean Repeated Lines Online",
    metaDescription:
      "Free online duplicate line remover tool. Remove repeated lines from text instantly.",
    examples: [
      {
        input: "apple\nbanana\napple",
        output: "apple\nbanana",
      },
    ],
  },
  {
    slug: "line-sorter",
    name: "Line Sorter",
    type: "transformer",
    description: "Sort lines alphabetically.",
    metaTitle: "Line Sorter - Sort Text Lines Online",
    metaDescription:
      "Free online line sorter tool. Sort text lines alphabetically in seconds.",
    examples: [
      {
        input: "banana\napple\ncherry",
        output: "apple\nbanana\ncherry",
      },
    ],
  },
  {
    slug: "random-string-generator",
    name: "Random String Generator",
    type: "generator",
    description: "Generate random strings easily.",
    metaTitle: "Random String Generator - Generate Random Text Online",
    metaDescription:
      "Free online random string generator. Create random text strings instantly.",
    examples: [
      {
        input: "Length: 10",
        output: "A1b2C3d4E5",
      },
    ],
  },
  {
    slug: "word-duplicator",
    name: "Word Duplicator",
    type: "transformer",
    description: "Duplicate words or sentences quickly.",
    metaTitle: "Word Duplicator - Duplicate Words Online",
    metaDescription:
      "Free online word duplicator tool. Duplicate words or short phrases instantly.",
    examples: [
      {
        input: "hello world",
        output: "hello hello world world",
      },
    ],
  },
  {
    slug: "text-repeater",
    name: "Text Repeater",
    type: "generator",
    description: "Repeat text multiple times instantly.",
    metaTitle: "Text Repeater - Repeat Text Online",
    metaDescription:
      "Free online text repeater tool. Repeat any text multiple times instantly.",
    examples: [
      {
        input: "Hello (3 times)",
        output: "Hello Hello Hello",
      },
    ],
  },
  {
    slug: "line-break-remover",
    name: "Line Break Remover",
    type: "transformer",
    description: "Remove all line breaks from text.",
    metaTitle: "Line Break Remover - Online Tool",
    metaDescription: "Remove new lines from text instantly.",
    examples: [
      {
        input: "Hello\nWorld",
        output: "Hello World",
      },
    ],
  },
];
