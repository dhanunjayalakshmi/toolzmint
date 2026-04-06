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
      {
        input: "Length: 16, Symbols, Numbers, Exclude Similar",
        output: "fK7!mR2@qT9#xL4%",
      },
    ],
    aboutText:
      "Use this password generator to create strong random passwords or memorable passphrases right in your browser. It is useful for account signups, password resets, and replacing reused passwords with something safer.",
    howToSteps: [
      "Choose password or passphrase mode.",
      "Adjust the length and the options you want to include.",
      "Generate, review the strength, and copy the result.",
    ],
    seoSections: [
      {
        title: "Why use a password generator",
        paragraphs: [
          "A password generator helps you create stronger passwords than most people make manually. Random passwords are harder to guess and reduce the risk of using predictable patterns across multiple accounts.",
          "This tool lets you generate secure passwords with uppercase letters, lowercase letters, numbers, symbols, and options that make the result easier to use when a site has specific password rules.",
        ],
      },
      {
        title: "Password or passphrase",
        paragraphs: [
          "If you want maximum randomness, use password mode. If you want something easier to remember, use passphrase mode. Both options are useful depending on the account and the level of security you need.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Is this password generator secure?",
        answer:
          "It generates passwords locally in your browser, which means your generated password does not need to be sent anywhere just to be created.",
      },
      {
        question: "What makes a strong password?",
        answer:
          "A strong password is usually long, random, and difficult to predict. Mixing character types and avoiding reused passwords improves security further.",
      },
      {
        question: "Should I use a password or a passphrase?",
        answer:
          "Use a password when you want dense randomness and a passphrase when you want something easier to remember. The better choice depends on the site requirements and your workflow.",
      },
    ],
    relatedToolSlugs: [
      "random-string-generator",
      "word-counter",
      "base64-encoder-decoder",
      "jwt-decoder",
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
      {
        input: "One short paragraph with two sentences. It reads clearly.",
        output: "Words: 9, Characters: 57, Sentences: 2",
      },
    ],
    aboutText:
      "Use this word counter to count words, characters, and sentences instantly while you write or edit. It is useful for essays, blog posts, social captions, assignments, and any writing that needs a quick length check.",
    howToSteps: [
      "Paste or type your text into the input area.",
      "Review the live word, character, and sentence counts.",
      "Edit your text until it matches your target length.",
    ],
    seoSections: [
      {
        title: "What a word counter helps with",
        paragraphs: [
          "A word counter helps you measure the length of your writing instantly. It is useful for checking essay limits, article length, social media copy, and writing tasks with minimum or maximum word requirements.",
          "This online word counter also tracks characters and sentences, which makes it easier to refine text for readability, SEO, or platform-specific limits.",
        ],
      },
      {
        title: "When to use a character and sentence count",
        paragraphs: [
          "Character counts are useful for titles, meta descriptions, and short-form writing. Sentence counts help when you want to keep writing concise or compare drafts more clearly.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Does this word counter count characters too?",
        answer:
          "Yes. It counts words, characters, and sentences so you can check multiple writing limits in one place.",
      },
      {
        question: "Can I use this for essays and blog posts?",
        answer:
          "Yes. It works well for essays, assignments, articles, captions, and other writing where length matters.",
      },
      {
        question: "Is the count updated live?",
        answer:
          "Yes. The counts update as you type or paste text, so you can adjust your writing immediately.",
      },
    ],
    relatedToolSlugs: [
      "character-counter",
      "line-break-remover",
      "remove-extra-spaces",
      "text-reverser",
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
      {
        input: '{"user":{"id":1,"name":"Dhanunjaya"},"active":true}',
        output:
          '{\n  "user": {\n    "id": 1,\n    "name": "Dhanunjaya"\n  },\n  "active": true\n}',
      },
      {
        input:
          '{\n  "name": "Toolzmint",\n  "type": "tool",\n  "active": true\n}',
        output: '{"name":"Toolzmint","type":"tool","active":true}',
      },
    ],
    aboutText:
      "Use this JSON formatter to beautify, validate, and minify JSON directly in your browser. It helps when you need readable API responses, cleaner configuration files, or compact JSON for transport and storage.",
    howToSteps: [
      "Paste your JSON into the input box.",
      "Choose whether you want to format or minify it.",
      "Review the output and copy the result when it looks right.",
    ],
    seoSections: [
      {
        title: "What a JSON formatter helps with",
        paragraphs: [
          "A JSON formatter makes raw JSON easier to read by adding indentation and line breaks. This is useful when you are inspecting API responses, editing configuration files, or debugging structured data.",
          "This tool also validates JSON while you paste it, so you can quickly tell whether the structure is correct before using it elsewhere.",
        ],
      },
      {
        title: "Format or minify JSON",
        paragraphs: [
          "Use formatted JSON when you want readability and easier debugging. Use minified JSON when you want a compact version with less whitespace for copying, sharing, or transport.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Does this tool validate JSON too?",
        answer:
          "Yes. It attempts to parse the JSON and shows whether the input is valid before displaying formatted or minified output.",
      },
      {
        question: "What is the difference between formatting and minifying JSON?",
        answer:
          "Formatting adds whitespace and indentation to improve readability, while minifying removes unnecessary whitespace to make the JSON smaller and more compact.",
      },
      {
        question: "Can I use this for API responses?",
        answer:
          "Yes. It is useful for beautifying JSON from APIs, logs, configuration files, or any other source that returns structured JSON data.",
      },
    ],
    relatedToolSlugs: [
      "base64-encoder-decoder",
      "jwt-decoder",
      "url-encoder-decoder",
      "unix-timestamp-converter",
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
      {
        input: "Too     many      spaces     here",
        output: "Too many spaces here",
      },
    ],
    aboutText:
      "Use this tool to remove extra spaces from text and clean up uneven spacing instantly. It is useful when text is copied from websites, PDFs, emails, or documents and you want a cleaner result before sharing or editing it.",
    howToSteps: [
      "Paste the text that contains extra spaces.",
      "Review the cleaned output instantly.",
      "Copy the normalized text and use it where you need it.",
    ],
    seoSections: [
      {
        title: "When to remove extra spaces from text",
        paragraphs: [
          "Extra spaces often appear when text is copied from PDFs, web pages, emails, or formatted documents. Cleaning them up makes the text easier to read and reuse.",
          "This tool removes repeated spaces and trims the final result so your text looks cleaner in forms, articles, spreadsheets, and plain-text editors.",
        ],
      },
      {
        title: "What this text cleaner does",
        paragraphs: [
          "This text cleaner collapses multiple spaces into a single space and removes unnecessary leading or trailing spaces from the result.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does remove extra spaces do?",
        answer:
          "It replaces repeated spaces with a single space and trims unnecessary space from the beginning and end of the text.",
      },
      {
        question: "Is this useful for copied text from PDFs or websites?",
        answer:
          "Yes. It is especially helpful when pasted text contains uneven spacing from PDFs, websites, emails, or rich-text documents.",
      },
      {
        question: "Does it change the words in my text?",
        answer:
          "No. It only normalizes spacing and leaves the actual words unchanged.",
      },
    ],
    relatedToolSlugs: [
      "line-break-remover",
      "word-counter",
      "duplicate-line-remover",
      "text-to-slug",
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
      {
        input: "hello%20world%20from%20Toolzmint",
        output: "hello world from Toolzmint",
      },
    ],
    aboutText:
      "Use this URL encoder and decoder to convert text into URL-safe encoded values or decode encoded URLs back into readable text. It is helpful when you work with query parameters, API requests, redirects, or pasted encoded links.",
    howToSteps: [
      "Choose whether you want to encode or decode a URL value.",
      "Paste your input into the active field.",
      "Review the result and copy the converted output.",
    ],
    seoSections: [
      {
        title: "What URL encoding is used for",
        paragraphs: [
          "URL encoding converts special characters, spaces, and symbols into a safe format that can be used inside URLs and query strings. This helps browsers and servers interpret the data correctly.",
          "This tool makes it easy to encode URLs for sharing or API use and decode encoded URLs back into readable text when you need to inspect or edit them.",
        ],
      },
      {
        title: "When to encode or decode a URL",
        paragraphs: [
          "Use encoding when you need to safely include text in a URL or query parameter. Use decoding when you receive encoded text and want to read or debug the original value.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does URL encoding do?",
        answer:
          "It replaces spaces and special characters with URL-safe encoded values so the text can be used reliably in a URL or query string.",
      },
      {
        question: "Can I decode an encoded URL back into readable text?",
        answer:
          "Yes. Switch to decode mode and the tool will convert URL-encoded text back into readable characters and spaces.",
      },
      {
        question: "When should I use a URL encoder?",
        answer:
          "Use it when you need to place text inside URLs, query parameters, or redirect links without breaking the URL structure.",
      },
    ],
    relatedToolSlugs: [
      "base64-encoder-decoder",
      "json-formatter",
      "jwt-decoder",
      "unix-timestamp-converter",
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
      {
        input: "SGVsbG8gV29ybGQh",
        output: "Hello World!",
      },
    ],
    aboutText:
      "Use this Base64 encoder and decoder to convert text into Base64 or decode Base64 back into readable text. It is useful for working with APIs, tokens, encoded payloads, and technical data that is shared in Base64 format.",
    howToSteps: [
      "Choose whether you want to encode text or decode Base64.",
      "Paste your input into the active text area.",
      "Review the output and copy the result when it is ready.",
    ],
    seoSections: [
      {
        title: "What Base64 encoding is used for",
        paragraphs: [
          "Base64 encoding is commonly used to represent text or binary data in a plain-text format that is easier to transmit through systems that expect text. You will often see it in APIs, tokens, embedded assets, and encoded payloads.",
          "This tool helps you encode text to Base64 and decode Base64 back into readable text directly in your browser.",
        ],
      },
      {
        title: "Encode or decode Base64",
        paragraphs: [
          "Use encode mode when you want to convert normal text into Base64. Use decode mode when you already have a Base64 string and want to turn it back into readable text.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Does this tool support decoding Base64 back into text?",
        answer:
          "Yes. You can switch to decode mode and convert a Base64 string back into readable text instantly.",
      },
      {
        question: "What is Base64 used for?",
        answer:
          "Base64 is used to safely represent data as text for transport, embedding, or storage in places where raw binary data would be awkward or unsupported.",
      },
      {
        question: "Can I paste Base64 with spaces or line breaks?",
        answer:
          "Yes. The decoder ignores whitespace so you can paste Base64 that contains spacing or line breaks.",
      },
    ],
    relatedToolSlugs: [
      "url-encoder-decoder",
      "jwt-decoder",
      "json-formatter",
      "unix-timestamp-converter",
    ],
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    type: "modifier",
    description: "Decode JWT header and payload instantly.",
    metaTitle: "JWT Decoder - Decode JWT Tokens Online",
    metaDescription:
      "Free online JWT decoder tool. Decode JWT header and payload instantly in your browser.",
    examples: [
      {
        input:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        output:
          'Header: {"alg":"HS256","typ":"JWT"} | Payload: {"sub":"1234567890","name":"John Doe","admin":true}',
      },
    ],
  },
  {
    slug: "unix-timestamp-converter",
    name: "Unix Timestamp Converter",
    type: "modifier",
    description: "Convert Unix timestamps to readable dates and back.",
    metaTitle: "Unix Timestamp Converter - Convert Time Online",
    metaDescription:
      "Free online Unix timestamp converter. Convert timestamps to readable local and UTC dates instantly.",
    examples: [
      {
        input: "1712126400",
        output:
          "Local Time: readable date | UTC Time: Wed, 03 Apr 2024 10:00:00 GMT",
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
      {
        input: "My First Blog Post 2026!",
        output: "my-first-blog-post-2026",
      },
    ],
    aboutText:
      "Use this text to slug converter to turn titles or phrases into clean URL slugs. It is useful for blog posts, product pages, CMS entries, and SEO-friendly links.",
    howToSteps: [
      "Type or paste a title, heading, or phrase.",
      "Review the generated slug instantly.",
      "Copy the slug for your URL, article, or content system.",
    ],
    seoSections: [
      {
        title: "What a slug is",
        paragraphs: [
          "A slug is the readable part of a URL that identifies a page, post, or resource. Clean slugs are easier to read and work better for organization and SEO.",
          "This tool converts text into a lowercase, hyphenated slug that removes unnecessary special characters automatically.",
        ],
      },
      {
        title: "When to use a text to slug converter",
        paragraphs: [
          "Use it when you are creating blog posts, landing pages, product URLs, or CMS entries and want a clean SEO-friendly path instead of a messy title string.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What is a URL slug?",
        answer:
          "A URL slug is the part of a web address that identifies a page in a readable way, usually made from words separated by hyphens.",
      },
      {
        question: "Does this tool remove special characters?",
        answer:
          "Yes. It lowercases the text, replaces spaces with hyphens, and removes special characters that do not belong in a clean slug.",
      },
      {
        question: "Can I use this for blog post URLs?",
        answer:
          "Yes. It is useful for blog posts, product pages, category pages, and other SEO-friendly URLs.",
      },
    ],
    relatedToolSlugs: [
      "remove-extra-spaces",
      "case-converter",
      "word-counter",
      "line-break-remover",
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
      {
        input: "cat\ndog\ncat\nbird\ndog",
        output: "cat\ndog\nbird",
      },
    ],
    aboutText:
      "Use this duplicate line remover to clean repeated lines from text instantly. It is useful for lists, exported data, copied logs, and text files that contain duplicate entries.",
    howToSteps: [
      "Paste the list or lines of text that contain duplicates.",
      "Review the cleaned output with only unique lines.",
      "Copy the result and reuse it where needed.",
    ],
    seoSections: [
      {
        title: "When to remove duplicate lines",
        paragraphs: [
          "Duplicate lines are common in copied lists, logs, exported data, email entries, and manually built text files. Removing duplicates helps you clean and organize text faster.",
          "This tool keeps the first occurrence of each line and removes repeated lines from the output automatically.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does duplicate line remover do?",
        answer:
          "It removes repeated lines from your text and keeps only the first occurrence of each unique line.",
      },
      {
        question: "Can I use this for lists and exported data?",
        answer:
          "Yes. It works well for lists, logs, copied entries, and exported text where duplicate lines need to be cleaned quickly.",
      },
      {
        question: "Does it keep the line order?",
        answer:
          "Yes. It keeps the first appearance of each line and preserves the original order of unique entries.",
      },
    ],
    relatedToolSlugs: [
      "line-sorter",
      "remove-extra-spaces",
      "line-break-remover",
      "word-counter",
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
    description:
      "Remove line breaks, paragraph breaks, and extra new lines from text instantly.",
    metaTitle: "Line Break Remover Online - Remove Line Breaks from Text",
    metaDescription:
      "Free online line break remover. Remove line breaks, paragraph breaks, and extra new lines from text instantly.",
    examples: [
      {
        input: "Hello\nWorld",
        output: "Hello World",
      },
      {
        input: "First line\nSecond line\nThird line",
        output: "First line Second line Third line",
      },
      {
        input: "Paragraph one.\n\nParagraph two.",
        output: "Paragraph one. Paragraph two.",
      },
    ],
    aboutText:
      "Use this line break remover to turn multi-line text into a clean single line. It is useful when you need to remove paragraph breaks, pasted email formatting, or extra new lines before sending text to forms, spreadsheets, or code fields.",
    howToSteps: [
      "Paste or type the text that contains line breaks.",
      "Review the cleaned single-line output instantly.",
      "Copy the result and use it wherever you need plain text.",
    ],
    seoSections: [
      {
        title: "When to use a line break remover",
        paragraphs: [
          "A line break remover is helpful when copied text contains unwanted new lines from PDFs, emails, websites, or documents. Instead of manually deleting each break, you can clean the text in one step.",
          "This is especially useful for converting multi-line text into a single line for spreadsheets, CMS fields, database entries, prompts, or form inputs that should not contain paragraph breaks.",
        ],
      },
      {
        title: "What this tool removes",
        paragraphs: [
          "This tool removes line breaks and paragraph breaks while keeping the text readable. It is a simple way to strip new lines from text without installing any software.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does a line break remover do?",
        answer:
          "It removes new lines and paragraph breaks from text so multiple lines can be turned into a cleaner single line.",
      },
      {
        question: "Does this tool remove paragraph breaks too?",
        answer:
          "Yes. It removes both regular line breaks and empty-line paragraph breaks from pasted text.",
      },
      {
        question: "How is this different from removing extra spaces?",
        answer:
          "Removing extra spaces cleans repeated spaces, while a line break remover specifically removes new lines and paragraph breaks between lines of text.",
      },
    ],
    relatedToolSlugs: [
      "remove-extra-spaces",
      "word-counter",
      "duplicate-line-remover",
      "line-sorter",
    ],
  },
];
