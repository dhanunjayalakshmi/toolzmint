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
      {
        input: "Line one\nLine two",
        output:
          "Characters (with spaces): 17, Characters (without spaces): 15, Lines: 2",
      },
    ],
    aboutText:
      "Use this character counter to count total characters with and without spaces instantly. It is useful for meta descriptions, titles, social posts, forms, and any writing with strict character limits.",
    howToSteps: [
      "Paste or type your text into the input area.",
      "Review the live character counts and line count.",
      "Edit the text until it fits your required limit.",
    ],
    seoSections: [
      {
        title: "When to use a character counter",
        paragraphs: [
          "A character counter helps when you need to stay within strict limits for titles, descriptions, usernames, form inputs, social posts, or other short text fields.",
          "This online character counter shows totals with and without spaces so you can quickly match the exact rule a platform requires.",
        ],
      },
      {
        title: "With spaces or without spaces",
        paragraphs: [
          "Some platforms count every visible character, including spaces, while others care more about letters and symbols only. Seeing both totals makes it easier to check your text accurately.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Does this character counter count spaces too?",
        answer:
          "Yes. It shows character totals both with spaces and without spaces so you can use the count that matches your requirement.",
      },
      {
        question: "Can I use this for meta descriptions or social captions?",
        answer:
          "Yes. It is useful for meta descriptions, titles, captions, form fields, and any content with character limits.",
      },
      {
        question: "Does it count lines as well?",
        answer:
          "Yes. It also shows the total number of lines in the current text.",
      },
    ],
    relatedToolSlugs: [
      "word-counter",
      "remove-extra-spaces",
      "line-break-remover",
      "text-to-slug",
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
        input: '{"user":{"id":1,"name":"Toolzmint"},"active":true}',
        output:
          '{\n  "user": {\n    "id": 1,\n    "name": "Toolzmint"\n  },\n  "active": true\n}',
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
        question:
          "What is the difference between formatting and minifying JSON?",
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
      {
        input: "my first blog title",
        output:
          "MY FIRST BLOG TITLE / my first blog title / My First Blog Title",
      },
    ],
    aboutText:
      "Use this case converter to change text to uppercase, lowercase, or title case instantly. It is useful for headings, content cleanup, formatting names, and standardizing text for documents or websites.",
    howToSteps: [
      "Paste or type the text you want to convert.",
      "Choose uppercase, lowercase, or title case.",
      "Review the converted output and copy the version you need.",
    ],
    seoSections: [
      {
        title: "What a case converter helps with",
        paragraphs: [
          "A case converter helps you quickly switch text between uppercase, lowercase, and title case without editing each word manually. This is useful for headings, labels, UI copy, blog titles, and general text cleanup.",
          "This online case converter keeps the original input visible while showing the converted output, which makes it easier to compare formats before copying.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Can I convert text to uppercase and lowercase?",
        answer:
          "Yes. This tool supports uppercase, lowercase, and title case conversions.",
      },
      {
        question: "What is title case?",
        answer:
          "Title case capitalizes the first letter of each word, which is often useful for headings and titles.",
      },
      {
        question: "Does the tool change my original text?",
        answer:
          "No. Your original input stays visible while the converted version appears separately.",
      },
    ],
    relatedToolSlugs: [
      "text-to-slug",
      "remove-extra-spaces",
      "word-counter",
      "character-counter",
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
    slug: "uuid-generator",
    name: "UUID Generator",
    type: "generator",
    description: "Generate secure UUID v4 values instantly.",
    metaTitle: "UUID Generator - Generate UUID v4 Online",
    metaDescription:
      "Free online UUID generator. Generate secure UUID v4 values instantly with standard or hyphenless format.",
    examples: [
      {
        input: "Generate 1 UUID",
        output: "550e8400-e29b-41d4-a716-446655440000",
      },
      {
        input: "Generate 3 UUIDs without hyphens",
        output:
          "550e8400e29b41d4a716446655440000\n9b2c5d0c0ef14d03a6f2c4a1a4f9d8b7\n7d6f4fd381e54c4ba3aef80f28e42f13",
      },
    ],
    aboutText:
      "Use this UUID generator to create UUID v4 values directly in your browser. It is useful for database records, API payloads, testing, identifiers, and any workflow that needs unique random IDs.",
    howToSteps: [
      "Choose how many UUIDs you want to generate.",
      "Decide whether you want the standard hyphenated format.",
      "Generate the UUIDs and copy the result.",
    ],
    seoSections: [
      {
        title: "What a UUID generator is used for",
        paragraphs: [
          "A UUID generator creates unique identifiers that are commonly used in databases, APIs, distributed systems, test data, and application records. UUID v4 values are random and help reduce the chance of collisions.",
          "This online UUID generator is useful when you need one ID quickly or a short batch of UUIDs without opening a terminal or writing custom code.",
        ],
      },
      {
        title: "Standard or hyphenless UUID format",
        paragraphs: [
          "The standard UUID format includes hyphens and is the most common choice for APIs, logs, and stored identifiers. Some workflows prefer a continuous 32-character string without hyphens, and this tool supports both.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What is a UUID v4?",
        answer:
          "UUID v4 is a randomly generated universally unique identifier commonly used to label records, requests, and objects in software systems.",
      },
      {
        question: "Are these UUIDs generated locally?",
        answer:
          "Yes. The UUIDs are generated in your browser using secure random values, so the tool does not need to send them elsewhere to create them.",
      },
      {
        question: "Can I generate UUIDs without hyphens?",
        answer:
          "Yes. You can switch to a hyphenless format if your workflow expects a continuous 32-character value.",
      },
    ],
    relatedToolSlugs: [
      "random-string-generator",
      "password-generator",
      "jwt-decoder",
      "base64-encoder-decoder",
    ],
  },
  {
    slug: "markdown-previewer",
    name: "Markdown Previewer",
    type: "transformer",
    description: "Preview markdown and render it instantly.",
    metaTitle: "Markdown Previewer - Preview Markdown Online",
    metaDescription:
      "Free online markdown previewer. Write markdown, preview the rendered output instantly, and copy the generated HTML.",
    examples: [
      {
        input: "# Toolzmint\n\nWrite **markdown** faster.",
        output: "Renders a heading and bold text in the live preview.",
      },
      {
        input:
          "- First item\n- Second item\n\n[Toolzmint](https://toolzmint.com)",
        output: "Renders a list and a clickable link in the preview panel.",
      },
    ],
    aboutText:
      "Use this markdown previewer to write markdown and see the rendered output immediately. It is useful for README drafts, documentation notes, issue templates, blog snippets, and any workflow where you want to check formatting before publishing.",
    howToSteps: [
      "Type or paste markdown into the input panel.",
      "Review the rendered preview instantly on the right.",
      "Copy the generated HTML if you need the rendered output elsewhere.",
    ],
    seoSections: [
      {
        title: "What a markdown previewer helps with",
        paragraphs: [
          "A markdown previewer helps you check how markdown will render before you publish it. This is useful for README files, documentation, comments, notes, and articles that rely on markdown formatting.",
          "Instead of guessing how headings, lists, links, or code blocks will appear, you can write markdown on one side and inspect the rendered result immediately.",
        ],
      },
      {
        title: "Write markdown and preview it instantly",
        paragraphs: [
          "This tool is useful when you want a fast markdown preview online without opening a larger editor. It keeps the workflow simple while still giving you immediate feedback on formatting.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What can this markdown previewer render?",
        answer:
          "It supports common markdown elements such as headings, paragraphs, lists, links, blockquotes, inline code, and fenced code blocks.",
      },
      {
        question: "Does this tool render markdown locally?",
        answer:
          "Yes. The preview is generated in your browser, so you can check markdown formatting without sending it elsewhere just to render it.",
      },
      {
        question: "Can I copy the rendered result?",
        answer:
          "Yes. The copy action copies the rendered HTML output so you can reuse it where needed.",
      },
    ],
    relatedToolSlugs: [
      "text-to-slug",
      "word-counter",
      "json-formatter",
      "line-break-remover",
    ],
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    type: "modifier",
    description: "Decode JWT header and payload instantly.",
    metaTitle: "JWT Decoder - Decode JWT Tokens Online",
    metaDescription:
      "Free online JWT decoder tool. Decode JWT header, payload, and timing claims instantly in your browser.",
    examples: [
      {
        input: "JWT token with HS256 header and JSON payload claims",
        output:
          'Header: {"alg":"HS256","typ":"JWT"} | Payload: {"sub":"1234567890","name":"Toolzmint","admin":true}',
      },
      {
        input: "JWT token with exp, iat, and nbf claims",
        output:
          "Shows decoded header, payload, signature, and readable timing values such as Expires At and Issued At.",
      },
    ],
    aboutText:
      "Use this JWT decoder to inspect the header and payload of a JSON Web Token directly in your browser. It is useful for debugging authentication flows, checking claims, reading expiry times, and understanding token contents quickly.",
    howToSteps: [
      "Paste the JWT token into the input field.",
      "Review the decoded header, payload, and signature instantly.",
      "Check timing claims like expiry or issue time if they exist.",
    ],
    seoSections: [
      {
        title: "What a JWT decoder helps with",
        paragraphs: [
          "A JWT decoder helps you inspect the header and payload of a JSON Web Token without manually base64-decoding each section. This is useful when debugging authentication flows, checking custom claims, or confirming token metadata.",
          "This online JWT decoder also surfaces common timing claims such as expiry, issued-at, and not-before values in a more readable form.",
        ],
      },
      {
        title: "Decode versus verify",
        paragraphs: [
          "Decoding a JWT lets you read its contents. It does not prove that the token is valid or trusted. This tool is for inspection and debugging, not signature verification.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Does this JWT decoder verify the token signature?",
        answer:
          "No. It decodes the token contents only. Signature verification requires the correct secret or public key and is outside the scope of this tool.",
      },
      {
        question: "Can I see JWT expiry time here?",
        answer:
          "Yes. If the token includes common timing claims such as exp, iat, or nbf, the tool shows readable values for them.",
      },
      {
        question: "Is the token decoded locally?",
        answer:
          "Yes. The decoding happens in your browser so you can inspect a token without sending it elsewhere just to read the header and payload.",
      },
    ],
    relatedToolSlugs: [
      "base64-encoder-decoder",
      "json-formatter",
      "unix-timestamp-converter",
      "uuid-generator",
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
    description: "Sort text lines alphabetically instantly.",
    metaTitle: "Line Sorter - Sort Text Lines Alphabetically Online",
    metaDescription:
      "Free online line sorter tool. Sort text lines alphabetically instantly and clean up lists faster.",
    examples: [
      {
        input: "banana\napple\ncherry",
        output: "apple\nbanana\ncherry",
      },
      {
        input: "Toolzmint\nApple\nbanana",
        output: "Apple\nToolzmint\nbanana",
      },
    ],
    aboutText:
      "Use this line sorter to sort text lines alphabetically in your browser. It is useful for lists, keyword sets, names, tags, copied exports, and any text that becomes easier to scan once the lines are ordered.",
    howToSteps: [
      "Paste the lines of text you want to sort.",
      "Review the alphabetically sorted output instantly.",
      "Copy the sorted list and reuse it where needed.",
    ],
    seoSections: [
      {
        title: "What a line sorter helps with",
        paragraphs: [
          "A line sorter helps you organize text lists quickly by putting each line into alphabetical order. It is useful for names, tags, keyword lists, exports, and any text that is easier to review once sorted.",
          "This online line sorter works instantly in the browser, which makes it convenient when you want to clean a list without using a spreadsheet or writing a quick script.",
        ],
      },
      {
        title: "When to sort text lines alphabetically",
        paragraphs: [
          "Use it when you want to compare lists more easily, clean copied data, prepare sorted entries for documentation, or make repeated values easier to spot before additional cleanup.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does line sorter do?",
        answer:
          "It sorts each line of your text into alphabetical order so lists become easier to read, compare, and clean.",
      },
      {
        question: "Can I use this for keyword lists or names?",
        answer:
          "Yes. It is useful for keyword lists, names, tags, copied exports, and other line-based text.",
      },
      {
        question: "Does line sorter remove duplicates too?",
        answer:
          "No. It sorts the lines only. If you need to remove repeated entries first, use the duplicate line remover.",
      },
    ],
    relatedToolSlugs: [
      "duplicate-line-remover",
      "remove-extra-spaces",
      "line-break-remover",
      "text-to-slug",
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
    slug: "qr-code-generator",
    name: "QR Code Generator",
    type: "generator",
    description: "Generate QR codes from any URL, text, email, or phone number instantly.",
    metaTitle: "QR Code Generator - Free Online QR Code Maker",
    metaDescription:
      "Generate QR codes from URLs, text, emails, or phone numbers instantly. Download as PNG for free.",
    examples: [
      {
        input: "https://toolzmint.com",
        output: "A scannable QR code image ready to download as PNG",
      },
      {
        input: "Hello from Toolzmint!",
        output: "QR code encoding plain text, scannable by any QR reader",
      },
    ],
    aboutText:
      "Use this QR code generator to create scannable QR codes from URLs, plain text, email addresses, phone numbers, or any other content. The code generates instantly as you type and can be downloaded as a PNG image.",
    howToSteps: [
      "Type or paste the URL or text you want to encode.",
      "Choose an error correction level if needed.",
      "Download the QR code as a PNG image.",
    ],
    seoSections: [
      {
        title: "What you can encode in a QR code",
        paragraphs: [
          "QR codes can encode URLs, plain text, email addresses, phone numbers, SMS messages, Wi-Fi credentials, and more. Any scanner will read the encoded content and act on it.",
          "The most common use case is encoding a URL so users can scan the code to open a website without typing the address. This is useful for print materials, posters, business cards, and presentations.",
        ],
      },
      {
        title: "Error correction levels",
        paragraphs: [
          "Error correction determines how much of the QR code can be damaged or obscured while still being readable. Low (L) gives the smallest code, while High (H) adds more redundancy and creates a denser but more resilient code. Use Medium (M) for most cases.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Can I use the QR code commercially?",
        answer:
          "Yes. The generated QR code image is yours to use however you need, including in commercial print materials, websites, or products.",
      },
      {
        question: "What file format does the download use?",
        answer:
          "The QR code downloads as a PNG image at 512×512 pixels, which is suitable for most print and digital uses.",
      },
      {
        question: "How much text can a QR code hold?",
        answer:
          "It depends on the error correction level and content type. URLs and short text work best. Very long inputs may result in a dense QR code that is harder to scan.",
      },
    ],
    relatedToolSlugs: [
      "url-encoder-decoder",
      "base64-encoder-decoder",
      "random-string-generator",
      "uuid-generator",
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    type: "generator",
    description: "Generate lorem ipsum placeholder text by paragraphs, sentences, or words.",
    metaTitle: "Lorem Ipsum Generator - Free Placeholder Text Online",
    metaDescription:
      "Generate lorem ipsum placeholder text instantly. Choose paragraphs, sentences, or words and copy the result for mockups, designs, and drafts.",
    examples: [
      {
        input: "3 paragraphs",
        output:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit... (full paragraphs of standard placeholder text)",
      },
      {
        input: "10 words",
        output: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
      },
    ],
    aboutText:
      "Use this lorem ipsum generator to create standard placeholder text for designs, mockups, wireframes, and draft layouts. Choose how many paragraphs, sentences, or words you need and copy the result instantly.",
    howToSteps: [
      "Select the output type: paragraphs, sentences, or words.",
      "Adjust the count using the + and − buttons.",
      "Copy the generated placeholder text for your project.",
    ],
    seoSections: [
      {
        title: "What lorem ipsum is used for",
        paragraphs: [
          "Lorem ipsum is standard placeholder text used in design, publishing, and development to fill space before real content is ready. It lets you focus on layout and typography without distraction from actual words.",
          "This generator lets you choose whether you need full paragraphs for a realistic content block, individual sentences for shorter areas, or a specific word count for tight-fit layouts.",
        ],
      },
      {
        title: "Paragraphs, sentences, or words",
        paragraphs: [
          "Use paragraphs when you need realistic multi-line content blocks for page layouts or document templates. Use sentences when you need a short block of text. Use word count when you need to fill a specific character or space constraint.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What is lorem ipsum?",
        answer:
          "Lorem ipsum is scrambled Latin text derived from Cicero's writings. It has been used as placeholder text in typesetting and design since the 1500s.",
      },
      {
        question: "Can I use lorem ipsum in a real project?",
        answer:
          "Yes. It is commonly used in mockups, wireframes, design prototypes, and any context where placeholder text is needed before real content is written.",
      },
      {
        question: "How many paragraphs can I generate?",
        answer:
          "You can generate up to 10 paragraphs, 20 sentences, or 200 words in one go. The output updates instantly as you adjust the count.",
      },
    ],
    relatedToolSlugs: [
      "word-counter",
      "text-repeater",
      "random-string-generator",
      "character-counter",
    ],
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    type: "modifier",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text.",
    metaTitle: "Hash Generator - MD5, SHA-256, SHA-512 Online",
    metaDescription:
      "Free online hash generator. Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text instantly in your browser.",
    examples: [
      {
        input: "hello world",
        output:
          "MD5: 5eb63bbbe01eeed093cb22bb8f5acdc3 · SHA-256: b94d27b9934d3e08a52e52d7da7dabfac484efe04294e576...",
      },
      {
        input: "Toolzmint",
        output: "All four hash outputs generated instantly for the same input",
      },
    ],
    aboutText:
      "Use this hash generator to compute MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input. It is useful for checksums, verifying data integrity, comparing values, and understanding hash outputs for different algorithms.",
    howToSteps: [
      "Type or paste the text you want to hash.",
      "All four hash values update instantly as you type.",
      "Copy the hash you need using the copy button on each row.",
    ],
    seoSections: [
      {
        title: "What a hash generator is used for",
        paragraphs: [
          "A hash generator takes any text input and produces a fixed-length output for a given algorithm. Hash values are useful for verifying data integrity, comparing strings without exposing content, and understanding how different algorithms produce different outputs for the same input.",
          "This tool generates MD5, SHA-1, SHA-256, and SHA-512 hashes in one step so you can compare results across algorithms without running separate tools.",
        ],
      },
      {
        title: "Which hash algorithm should I use",
        paragraphs: [
          "SHA-256 and SHA-512 are the most widely recommended for security-related use cases. MD5 and SHA-1 are considered cryptographically broken for security purposes but are still used for checksums and non-security identifiers where collision resistance is not required.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Is this hash generator secure to use?",
        answer:
          "All hashing happens in your browser. Nothing is sent to a server. SHA-256 and SHA-512 use the browser's built-in Web Crypto API.",
      },
      {
        question: "Can I reverse a hash back to the original text?",
        answer:
          "No. Hashing is a one-way function. You cannot reverse a hash to recover the original input.",
      },
      {
        question: "Why do MD5 and SHA-1 still appear here?",
        answer:
          "MD5 and SHA-1 are still used for non-security purposes like file checksums, legacy API signatures, and quick content identifiers. They are included here for compatibility and comparison, not for security use.",
      },
    ],
    relatedToolSlugs: [
      "base64-encoder-decoder",
      "url-encoder-decoder",
      "jwt-decoder",
      "password-generator",
    ],
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    type: "transformer",
    description: "Convert colors between HEX, RGB, and HSL formats instantly.",
    metaTitle: "Color Converter - HEX to RGB to HSL Online",
    metaDescription:
      "Free online color converter. Convert colors between HEX, RGB, and HSL formats instantly with a live color preview.",
    examples: [
      {
        input: "#ff5733",
        output: "HEX: #FF5733 · RGB: rgb(255, 87, 51) · HSL: hsl(11, 100%, 60%)",
      },
      {
        input: "rgb(100, 149, 237)",
        output: "HEX: #6495ED · RGB: rgb(100, 149, 237) · HSL: hsl(219, 79%, 66%)",
      },
    ],
    aboutText:
      "Use this color converter to switch between HEX, RGB, and HSL color formats instantly. It is useful for front-end development, design work, CSS authoring, and any workflow where you need the same color expressed in a different format.",
    howToSteps: [
      "Enter a color in any format: HEX (#ff5733), RGB (255, 87, 51), or HSL (11, 100%, 60%).",
      "The tool auto-detects the format and shows a live color preview.",
      "Copy the HEX, RGB, or HSL value you need.",
    ],
    seoSections: [
      {
        title: "When to convert between color formats",
        paragraphs: [
          "Different tools, design systems, and codebases use different color formats. CSS often uses HEX or RGB, while HSL is useful for making programmatic adjustments to lightness and saturation. A color converter lets you move between them without manual calculation.",
          "This tool accepts HEX, RGB, and HSL input and outputs all three formats so you can pick whichever you need.",
        ],
      },
      {
        title: "HEX vs RGB vs HSL",
        paragraphs: [
          "HEX is the most common format for web colors and is compact. RGB makes each color channel explicit and is easy to use in CSS. HSL is the most intuitive for humans because it separates hue, saturation, and lightness into distinct values that are easy to reason about when adjusting a color.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What color formats does this tool accept?",
        answer:
          "It accepts HEX (#RRGGBB or #RGB), RGB (as rgb(R,G,B) or plain R,G,B numbers), and HSL (as hsl(H,S%,L%) or plain H S% L% values).",
      },
      {
        question: "Does it show a color preview?",
        answer:
          "Yes. A color swatch appears once a valid color is detected so you can visually confirm the result.",
      },
      {
        question: "Can I copy just the format I need?",
        answer:
          "Yes. Each output row has its own copy button so you can copy HEX, RGB, or HSL independently.",
      },
    ],
    relatedToolSlugs: [
      "html-entities-encoder-decoder",
      "base64-encoder-decoder",
      "url-encoder-decoder",
      "random-string-generator",
    ],
  },
  {
    slug: "html-entities-encoder-decoder",
    name: "HTML Entities Encoder / Decoder",
    type: "modifier",
    description: "Encode text to HTML entities or decode HTML entities back to plain text.",
    metaTitle: "HTML Entities Encoder Decoder - Convert HTML Online",
    metaDescription:
      "Free online HTML entities encoder and decoder. Convert characters to HTML entities or decode entities back to plain text instantly.",
    examples: [
      {
        input: '<a href="https://example.com">Link & more</a>',
        output: "&lt;a href=&quot;https://example.com&quot;&gt;Link &amp; more&lt;/a&gt;",
      },
      {
        input: "&lt;h1&gt;Hello &amp; World&lt;/h1&gt;",
        output: "<h1>Hello & World</h1>",
      },
    ],
    aboutText:
      "Use this HTML entities tool to encode special characters into their HTML entity equivalents, or decode HTML entities back into readable text. It is useful for safely embedding HTML in code, escaping user input for display, and reading encoded HTML.",
    howToSteps: [
      "Choose encode or decode mode.",
      "Paste or type your text in the input panel.",
      "Copy the converted output from the result panel.",
    ],
    seoSections: [
      {
        title: "What HTML entities are",
        paragraphs: [
          "HTML entities are special sequences used to represent characters that have meaning in HTML markup, such as < (less than), > (greater than), & (ampersand), and \" (double quote). Using entities prevents browsers from misinterpreting these characters as HTML tags or attributes.",
          "Encoding text to HTML entities is important when displaying user-generated content, embedding code snippets in pages, or writing HTML that should appear as text rather than rendered markup.",
        ],
      },
      {
        title: "Encoding versus decoding",
        paragraphs: [
          "Encoding converts plain text with special characters into safe HTML entity sequences. Decoding reverses this, turning entity sequences back into the original characters. Both directions are useful depending on whether you are preparing content for HTML output or reading encoded content.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What characters get encoded?",
        answer:
          "The encoder converts &, <, >, \", and ' into their HTML entity equivalents (&amp;, &lt;, &gt;, &quot;, &#39;).",
      },
      {
        question: "What entities can be decoded?",
        answer:
          "The decoder handles named entities like &amp;, &lt;, &copy;, &euro;, numeric entities like &#169;, and hex entities like &#xA9;.",
      },
      {
        question: "Is this the same as URL encoding?",
        answer:
          "No. HTML entity encoding is for safe HTML display, while URL encoding is for encoding characters in URLs. They use different formats and serve different purposes.",
      },
    ],
    relatedToolSlugs: [
      "color-converter",
      "base64-encoder-decoder",
      "url-encoder-decoder",
      "json-formatter",
    ],
  },
  {
    slug: "line-break-remover",
    name: "Line Break Remover",
    type: "transformer",
    description:
      "Remove line breaks, paragraph breaks, and extra new lines from text instantly.",
    metaTitle: "Line Break Remover - Remove Line Breaks from Text Online",
    metaDescription:
      "Remove line breaks, paragraph breaks, and extra new lines from text instantly with this free online line break remover.",
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
      {
        input: "Name: Toolzmint\nRole: Utility Website\nStatus: Active",
        output: "Name: Toolzmint Role: Utility Website Status: Active",
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
          "If you need to remove line breaks online after copying content from a PDF, email, or website, this tool turns the text into a single line quickly and keeps the workflow simple.",
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
