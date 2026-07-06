export const tools = [
  {
    slug: "word-frequency-counter",
    name: "Word Frequency Counter",
    type: "analyzer",
    description: "Count how often each word appears in your text and rank them by frequency.",
    metaTitle: "Word Frequency Counter - Analyze Word Frequency Online",
    metaDescription:
      "Free online word frequency counter. Paste any text and instantly see how often each word appears, ranked by frequency. Filter stop words, set minimum length, and download results as CSV.",
    examples: [
      {
        input: "the quick brown fox jumps over the lazy dog the fox",
        output: "the: 3, fox: 2, quick: 1, brown: 1, jumps: 1…",
      },
      {
        input: "Same text with 'Ignore stop words' on",
        output: "quick: 1, brown: 1, fox: 2, jumps: 1, lazy: 1, dog: 1",
      },
    ],
    aboutText:
      "Use this word frequency counter to analyse how often each word appears in any text. Paste an article, essay, speech, or document and get a ranked table of every word with its count and percentage. You can filter out common stop words, set a minimum word length, sort alphabetically or by frequency, and download the full results as a CSV file.",
    howToSteps: [
      "Paste or type your text into the input area.",
      "Choose a sort order — most frequent, least frequent, or alphabetical.",
      "Toggle 'Ignore stop words' to remove common words like 'the' and 'a'.",
      "Set a minimum word length to filter out very short words.",
      "Download the full frequency table as a CSV file if needed.",
    ],
    seoSections: [
      {
        title: "What word frequency analysis is used for",
        paragraphs: [
          "Word frequency analysis shows you which words appear most often in a piece of text. This is useful for content analysis, SEO keyword research, studying writing patterns, comparing documents, and identifying overused words in drafts.",
          "Paste any article, essay, book chapter, speech, or document and the tool instantly ranks every word by how many times it appears. You can see both the raw count and the percentage of total words.",
        ],
      },
      {
        title: "Stop words and filtering options",
        paragraphs: [
          "Common English words like 'the', 'a', 'and', and 'is' appear frequently in almost every text but carry little meaning on their own. Enabling the stop words filter removes these so you can focus on the words that are actually significant.",
          "The minimum word length filter lets you ignore very short words. Setting it to 3 or 4 removes most articles and prepositions and surfaces the more meaningful vocabulary of your text.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does a word frequency counter do?",
        answer:
          "It counts how many times each word appears in your text and shows the results ranked by frequency, along with the percentage each word represents of the total.",
      },
      {
        question: "What are stop words?",
        answer:
          "Stop words are common English words like 'the', 'a', 'and', 'is', and 'in' that appear frequently but carry little meaning. Filtering them out helps you focus on the more significant words in your text.",
      },
      {
        question: "Can I download the word frequency results?",
        answer:
          "Yes. Click the Download CSV button to save the full word frequency table as a CSV file you can open in Excel or Google Sheets.",
      },
      {
        question: "Is the analysis case sensitive?",
        answer:
          "By default it is case insensitive, so 'The' and 'the' are counted as the same word. Enable the case sensitive toggle if you need them treated separately.",
      },
      {
        question: "How many words can this tool handle?",
        answer:
          "The tool processes all the text you paste but displays a maximum of 200 rows in the table for performance. The full list is available in the downloaded CSV.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The word frequency counter is completely free and runs in your browser. Your text is never sent to a server.",
      },
    ],
    relatedToolSlugs: [
      "word-counter",
      "character-counter",
      "diff-checker",
      "line-sorter",
    ],
  },
  {
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    type: "transformer",
    description: "Convert JSON arrays and objects to CSV format instantly.",
    metaTitle: "JSON to CSV Converter - Convert JSON to CSV Online Free",
    metaDescription:
      "Free online JSON to CSV converter. Paste any JSON array or object and download a clean CSV file instantly. Supports comma, semicolon, and tab delimiters.",
    examples: [
      {
        input: '[{"name":"Alice","age":30},{"name":"Bob","age":25}]',
        output: "name,age\nAlice,30\nBob,25",
      },
      {
        input: '{"product":"Widget","price":9.99,"stock":100}',
        output: "product,price,stock\nWidget,9.99,100",
      },
    ],
    aboutText:
      "Use this JSON to CSV converter to turn JSON arrays and objects into clean CSV files directly in your browser. It handles arrays of objects, single objects, missing keys, nested values, and special characters. You can choose your delimiter and download the result as a .csv file.",
    howToSteps: [
      "Paste your JSON array or object into the input area.",
      "Choose a delimiter — comma, semicolon, or tab.",
      "Toggle headers on or off depending on your needs.",
      "Copy the CSV output or download it as a .csv file.",
    ],
    seoSections: [
      {
        title: "When to convert JSON to CSV",
        paragraphs: [
          "JSON is the standard format for APIs and web services, but spreadsheet tools like Excel and Google Sheets work better with CSV. Converting JSON to CSV lets you open API data directly in a spreadsheet without writing code.",
          "This tool is useful when you receive JSON from an API response, a database export, or a configuration file and need to import it into a spreadsheet, BI tool, or data pipeline that expects CSV.",
        ],
      },
      {
        title: "Handling arrays, objects, and nested data",
        paragraphs: [
          "This converter handles both arrays of objects (the most common case) and single objects. If some rows are missing keys that others have, the missing cells are left empty rather than shifting columns.",
          "Nested objects and arrays within your JSON are serialised as JSON strings inside the CSV cell rather than being silently dropped. This keeps your data intact and makes it easy to identify fields that may need further processing.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Can I convert a JSON array to CSV?",
        answer:
          "Yes. Paste a JSON array of objects and the converter extracts the keys as column headers and maps each object to a row.",
      },
      {
        question: "What if my JSON objects have different keys?",
        answer:
          "The converter collects all unique keys across every object and uses them as columns. Missing values are left as empty cells.",
      },
      {
        question: "Can I download the result as a .csv file?",
        answer:
          "Yes. Click the Download button to save the output as a .csv file you can open in Excel, Google Sheets, or any CSV-compatible tool.",
      },
      {
        question: "Which delimiters are supported?",
        answer:
          "Comma, semicolon, and tab. Semicolon is common in European locales and tab is useful when values contain commas.",
      },
      {
        question: "How are nested objects handled?",
        answer:
          "Nested objects and arrays are serialised as JSON strings inside the cell. This preserves the data without silently dropping fields.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The JSON to CSV converter is completely free, runs in your browser, and does not send your data anywhere.",
      },
    ],
    relatedToolSlugs: [
      "csv-to-json",
      "json-formatter",
      "diff-checker",
      "url-encoder-decoder",
    ],
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    type: "analyzer",
    description: "Test regular expressions against any text and see live highlighted matches.",
    metaTitle: "Regex Tester - Test Regular Expressions Online",
    metaDescription:
      "Free online regex tester. Test regular expressions against any text, see highlighted matches, capture groups, and match indexes instantly. Supports g, i, m, s flags.",
    examples: [
      {
        input: "Pattern: \\d+  |  Test: Order 123 and item 456",
        output: "2 matches: 123 (index 6), 456 (index 20)",
      },
      {
        input: "Pattern: (\\w+)@(\\w+\\.\\w+)  |  Test: hello@example.com",
        output: "Match: hello@example.com  |  $1: hello  |  $2: example.com",
      },
    ],
    aboutText:
      "Use this regex tester to write and test regular expressions directly in your browser. It highlights all matches in your test string in real time, shows match indexes, and displays captured groups. It supports the g (global), i (case insensitive), m (multiline), and s (dot-all) flags.",
    howToSteps: [
      "Enter your regular expression pattern in the pattern field.",
      "Toggle flags (g, i, m, s) as needed for your use case.",
      "Paste or type the text you want to test in the test string area.",
      "Review the highlighted matches and captured groups below.",
    ],
    seoSections: [
      {
        title: "What a regex tester helps with",
        paragraphs: [
          "A regex tester lets you experiment with regular expressions interactively without writing code. You can see exactly which parts of your text match the pattern, adjust the expression, and verify the result before using it in a project.",
          "Regular expressions are used in programming, data processing, search tools, and text editors. Testing them visually makes it much faster to get the pattern right.",
        ],
      },
      {
        title: "Understanding regex flags",
        paragraphs: [
          "The g flag (global) finds all matches in the text instead of stopping at the first one. The i flag makes the match case insensitive. The m flag makes ^ and $ match the start and end of each line rather than the whole string. The s flag makes the dot character match newlines as well.",
          "Combining flags gives you fine-grained control. For example, /hello/gi matches 'Hello', 'HELLO', and 'hello' anywhere in the text.",
        ],
      },
      {
        title: "Capture groups in regular expressions",
        paragraphs: [
          "Capture groups are parts of a regex pattern wrapped in parentheses. When a match is found, each group captures the portion of the text it matched separately. This is useful for extracting specific parts like email usernames, domain names, dates, or version numbers.",
          "This regex tester shows each capture group alongside the full match so you can verify your groups are working correctly before using them in code.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What is a regex tester?",
        answer:
          "A regex tester is a tool that lets you write a regular expression and test it against sample text to see which parts of the text match the pattern.",
      },
      {
        question: "What regex flags does this tester support?",
        answer:
          "It supports g (global), i (case insensitive), m (multiline), and s (dot-all). You can toggle each flag independently.",
      },
      {
        question: "Does this show all matches or just the first one?",
        answer:
          "It shows all matches by default. The global flag (g) is enabled by default, but you can toggle it off to see only the first match.",
      },
      {
        question: "Does this support capture groups?",
        answer:
          "Yes. Each match shows its captured groups ($1, $2, etc.) and named groups if your pattern uses them.",
      },
      {
        question: "Does this work with JavaScript regex syntax?",
        answer:
          "Yes. This tool uses JavaScript's built-in RegExp engine, so any pattern that works in JavaScript will work here.",
      },
      {
        question: "Is this regex tester free?",
        answer:
          "Yes. It is completely free, runs in your browser, and does not send your pattern or test string anywhere.",
      },
    ],
    relatedToolSlugs: [
      "diff-checker",
      "json-formatter",
      "url-encoder-decoder",
      "hash-generator",
    ],
  },
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
      {
        question: "How long should a strong password be?",
        answer:
          "Security experts generally recommend at least 12 to 16 characters. Longer passwords are harder to brute-force, especially when they include symbols and numbers.",
      },
      {
        question: "Can I generate a random password with symbols?",
        answer:
          "Yes. You can include symbols, numbers, uppercase letters, and lowercase letters to create a complex random password that meets most site requirements.",
      },
      {
        question: "Is this a free random password generator?",
        answer:
          "Yes. The password generator is completely free, requires no account, and generates all passwords locally in your browser.",
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
    metaTitle: "Word Counter - Count Words, Characters & Reading Time Online",
    metaDescription:
      "Free online word counter. Count words, characters, sentences, paragraphs, and estimated reading time instantly. Great for essays, blogs, and social posts.",
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
      {
        question: "Does this tool show reading time?",
        answer:
          "Yes. It estimates reading time based on an average reading speed of 200 words per minute, which is useful for blog posts and articles.",
      },
      {
        question: "Can I check paragraph count?",
        answer:
          "Yes. The paragraph count shows how many distinct paragraphs your text contains, which is helpful when structuring essays or long-form content.",
      },
      {
        question: "Is this useful for checking essay word limits?",
        answer:
          "Yes. Paste your essay into the tool and the word count updates instantly, making it easy to stay within your required word limit.",
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
    metaTitle: "Character Counter - Count Characters Online Free",
    metaDescription:
      "Free online character counter. Count characters with and without spaces instantly. Ideal for meta descriptions, Twitter posts, SMS, and any content with character limits.",
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
      {
        question: "What is the Twitter character limit?",
        answer:
          "Twitter allows up to 280 characters per post. Paste your tweet into this character counter to check the length before posting.",
      },
      {
        question: "What is the character limit for a meta description?",
        answer:
          "Google typically displays around 155 to 160 characters for meta descriptions. Use this counter to keep your description within that range.",
      },
      {
        question: "What is the character limit for an SMS?",
        answer:
          "A standard SMS message is 160 characters. Messages longer than that are split into multiple parts by most carriers.",
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
      {
        title: "Uppercase, lowercase, title case, and sentence case",
        paragraphs: [
          "Different contexts call for different cases. Title case is standard for article headings and book titles. Uppercase works for acronyms and emphasis. Lowercase is common in slugs, code variables, and informal writing. Sentence case capitalizes only the first word, which is typical for body text.",
          "If you work with code and need camelCase or snake_case, those formats are best applied with a dedicated code formatter — this tool focuses on human-readable case conversions for writing and content.",
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
      {
        question: "What is sentence case?",
        answer:
          "Sentence case capitalizes only the first letter of the first word in a sentence, which is the standard format for body text and general writing.",
      },
      {
        question: "Can I convert a title from uppercase to title case?",
        answer:
          "Yes. Paste the uppercase title and switch to title case output. Each word will be properly capitalized without changing the rest.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The case converter is completely free and runs in your browser with no account required.",
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
    description: "Generate secure UUID v4 / GUID values instantly.",
    metaTitle: "UUID / GUID Generator - Generate UUID v4 Online Free",
    metaDescription:
      "Free online UUID and GUID generator. Generate secure UUID v4 values instantly in standard or hyphenless format. No install needed.",
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
      "Use this UUID generator to create UUID v4 values directly in your browser. It is useful for database records, API payloads, testing, identifiers, and any workflow that needs unique random IDs. UUID and GUID refer to the same format — this tool works for both.",
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
        title: "UUID and GUID — the same thing",
        paragraphs: [
          "UUID stands for Universally Unique Identifier. GUID stands for Globally Unique Identifier. They refer to the same 128-bit format and are interchangeable in practice. Microsoft popularised the term GUID, while the broader software industry uses UUID.",
          "If you are looking for a GUID generator, this tool produces the same output. A generated value like 550e8400-e29b-41d4-a716-446655440000 is both a valid UUID and a valid GUID.",
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
      {
        question: "Is this also a GUID generator?",
        answer:
          "Yes. UUID and GUID are the same 128-bit format. GUID is the term used by Microsoft and Windows, while UUID is the broader industry standard. The values this tool generates are valid as both UUIDs and GUIDs.",
      },
      {
        question: "What is the difference between UUID and GUID?",
        answer:
          "There is no practical difference. GUID is Microsoft's name for the same format defined by the UUID standard. Both are 32 hexadecimal characters displayed in five groups separated by hyphens.",
      },
      {
        question: "Can I generate multiple UUIDs at once?",
        answer:
          "Yes. You can generate up to 50 UUIDs in one go. Each value is independently random and unique.",
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
    metaTitle: "Unix Timestamp Converter - Epoch Time to Date Online",
    metaDescription:
      "Free online Unix timestamp converter. Convert epoch timestamps to readable local and UTC dates, or convert a date back to a Unix timestamp instantly.",
    examples: [
      {
        input: "1712126400",
        output:
          "Local Time: readable date | UTC Time: Wed, 03 Apr 2024 10:00:00 GMT",
      },
    ],
    aboutText:
      "Use this Unix timestamp converter to convert epoch timestamps to human-readable dates, or convert a date and time back to a Unix timestamp. It is useful for debugging APIs, reading log files, working with databases, and any workflow that involves Unix time or epoch values.",
    howToSteps: [
      "Enter a Unix timestamp (epoch) to convert it to a local and UTC date.",
      "Or enter a date and time to get the equivalent Unix timestamp.",
      "Copy the result for your API call, database query, or debugging session.",
    ],
    seoSections: [
      {
        title: "What is a Unix timestamp",
        paragraphs: [
          "A Unix timestamp is a number that represents the total seconds elapsed since January 1, 1970 at midnight UTC, also called the Unix epoch. It is a common way for software systems to store and transmit time without worrying about time zones.",
          "Unix timestamps are used in APIs, databases, logs, authentication tokens, and many backend systems. Converting a timestamp to a readable date is one of the most frequent tasks in debugging and development work.",
        ],
      },
      {
        title: "Convert epoch time to a readable date",
        paragraphs: [
          "When you receive a raw timestamp like 1712126400 from an API or log file, it is not immediately readable. This tool converts it to a local time and UTC time so you can understand what moment it represents without writing code.",
          "You can also convert in the opposite direction — enter a human-readable date and get the Unix timestamp back. This is useful when you need to pass a specific time to an API or construct a database query.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What is a Unix timestamp?",
        answer:
          "A Unix timestamp is the number of seconds that have passed since January 1, 1970 at 00:00:00 UTC. It is a widely used format for storing and transmitting time in software systems.",
      },
      {
        question: "What is epoch time?",
        answer:
          "Epoch time is another name for Unix time. The epoch refers to the starting point — January 1, 1970 — and the timestamp counts seconds from that moment.",
      },
      {
        question: "Can I convert a date back to a Unix timestamp?",
        answer:
          "Yes. Enter a date and time and this tool returns the corresponding Unix timestamp, which is useful for API calls, database queries, and time-based filtering.",
      },
      {
        question: "Does this tool show local time or UTC?",
        answer:
          "It shows both. Local time reflects your browser's time zone and UTC shows the universal coordinated time so you can use whichever format your workflow needs.",
      },
      {
        question: "What is the difference between seconds and milliseconds timestamps?",
        answer:
          "Unix timestamps are typically in seconds, but JavaScript and some APIs use milliseconds. A millisecond timestamp is 1000 times larger than a second-based one. If your value looks unusually large, it is likely in milliseconds.",
      },
    ],
    relatedToolSlugs: [
      "jwt-decoder",
      "base64-encoder-decoder",
      "json-formatter",
      "url-encoder-decoder",
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
    description: "Reverse any text, word, or sentence instantly.",
    metaTitle: "Text Reverser - Reverse Text Online Free",
    metaDescription:
      "Free online text reverser. Reverse any word, sentence, or paragraph instantly. Great for mirror text, fun messages, and string testing.",
    examples: [
      {
        input: "Toolzmint",
        output: "tnimzlooT",
      },
      {
        input: "Hello World",
        output: "dlroW olleH",
      },
    ],
    aboutText:
      "Use this text reverser to flip any text backwards instantly. It reverses the characters in your input, which is useful for mirror text, fun encoded messages, creative writing, and testing string reversal behavior in code.",
    howToSteps: [
      "Type or paste the text you want to reverse.",
      "The reversed output appears instantly.",
      "Copy the reversed text and use it wherever needed.",
    ],
    seoSections: [
      {
        title: "What reversed text is used for",
        paragraphs: [
          "Reversed text is often used for fun — creating mirror messages, writing things backwards for social media, or encoding simple notes. It is also a common programming exercise used to understand string manipulation and algorithm basics.",
          "Developers sometimes use a text reverser to quickly test how their code handles reversed strings, or to generate test data for string-processing functions.",
        ],
      },
      {
        title: "Reverse words or reverse characters",
        paragraphs: [
          "This tool reverses the full character sequence of the text you enter. If you type a full sentence, each character is reversed so the last character becomes the first.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does a text reverser do?",
        answer:
          "It reverses the order of characters in your text so the last character becomes the first. For example, 'hello' becomes 'olleh'.",
      },
      {
        question: "Can I reverse a full sentence?",
        answer:
          "Yes. You can reverse any length of text — a single word, a sentence, or multiple lines.",
      },
      {
        question: "Does it reverse words or characters?",
        answer:
          "It reverses individual characters across the entire input. The word order is not preserved — each character is flipped.",
      },
      {
        question: "Is this useful for mirror text?",
        answer:
          "Yes. Reversed text looks like a mirror reflection when printed, which is a common use for social posts and fun messages.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The text reverser is completely free and runs in your browser with no account needed.",
      },
    ],
    relatedToolSlugs: [
      "case-converter",
      "text-to-slug",
      "word-counter",
      "remove-extra-spaces",
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
      {
        title: "Deduplicate text lists and exported data",
        paragraphs: [
          "When you export data from a spreadsheet, CRM, or database and paste it into a text file, duplicate entries are common. This tool lets you deduplicate text quickly — paste the list, get back only the unique lines, and move on.",
          "It is also useful for cleaning keyword lists, removing repeated log entries, deduplicating email addresses, and organizing any line-based data where each unique line should appear only once.",
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
      {
        question: "Can I use this to deduplicate email addresses or keywords?",
        answer:
          "Yes. Paste one email address or keyword per line and the tool keeps only the unique entries, removing any repeated lines.",
      },
      {
        question: "Is the comparison case-sensitive?",
        answer:
          "Yes. Lines are compared exactly as written, so 'Apple' and 'apple' are treated as different lines.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The duplicate line remover is completely free and processes everything in your browser with no data sent to a server.",
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
    description: "Generate random alphanumeric strings, tokens, and keys instantly.",
    metaTitle: "Random String Generator - Generate Random Alphanumeric Strings",
    metaDescription:
      "Free online random string generator. Generate random alphanumeric strings, tokens, API keys, and test data instantly. No install needed.",
    examples: [
      {
        input: "Length: 10, alphanumeric",
        output: "A1b2C3d4E5",
      },
      {
        input: "Length: 32, lowercase hex",
        output: "3f7a2b1c9e4d6f8a0b5c2e7d1a3f9b4c",
      },
    ],
    aboutText:
      "Use this random string generator to create alphanumeric strings, tokens, API keys, secret keys, test IDs, and placeholder values instantly in your browser. It is useful for development, testing, security tokens, and any workflow that needs a unique random value.",
    howToSteps: [
      "Choose the length and character set for your random string.",
      "Generate the string and review the result.",
      "Copy the output and use it in your project, test, or form.",
    ],
    seoSections: [
      {
        title: "What random strings are used for",
        paragraphs: [
          "Random strings are commonly used as API keys, secret tokens, session IDs, temporary passwords, test data, and unique identifiers in software development. A random alphanumeric string is hard to predict and reduces the chance of collisions.",
          "This random string generator runs entirely in your browser, which means the generated values are not logged or stored anywhere. You can generate as many strings as you need without any account.",
        ],
      },
      {
        title: "Random strings for testing and development",
        paragraphs: [
          "Developers frequently need random test data — placeholder names, IDs, or values to fill forms and database entries during development. A random string generator is a quick way to get clean, unpredictable values without writing code.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What is a random string generator used for?",
        answer:
          "It is used to generate API keys, tokens, secret keys, session IDs, test data, and unique placeholder values for development and security workflows.",
      },
      {
        question: "Can I use this to generate API keys or tokens?",
        answer:
          "Yes. You can generate random alphanumeric strings of any length to use as API keys, tokens, or temporary secrets for testing.",
      },
      {
        question: "Are the generated strings truly random?",
        answer:
          "Yes. The strings are generated using your browser's secure random number generator, which produces unpredictable values suitable for non-cryptographic tokens and test data.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The random string generator is completely free and runs in your browser with no sign-up required.",
      },
      {
        question: "Can I choose the character set?",
        answer:
          "Yes. You can include or exclude uppercase letters, lowercase letters, numbers, and symbols to match the format your workflow requires.",
      },
    ],
    relatedToolSlugs: [
      "password-generator",
      "uuid-generator",
      "hash-generator",
      "base64-encoder-decoder",
    ],
  },
  {
    slug: "word-duplicator",
    name: "Word Duplicator",
    type: "transformer",
    description: "Duplicate every word in your text instantly.",
    metaTitle: "Word Duplicator - Duplicate Every Word Online Free",
    metaDescription:
      "Free online word duplicator tool. Duplicate every word in a sentence or list instantly. Useful for testing, creative writing, and text experiments.",
    examples: [
      {
        input: "hello world",
        output: "hello hello world world",
      },
      {
        input: "good morning team",
        output: "good good morning morning team team",
      },
    ],
    aboutText:
      "Use this word duplicator to repeat every word in your text side by side instantly. It is useful for creative writing experiments, testing text-rendering behavior, building deliberate repetition patterns, and having a bit of fun with language.",
    howToSteps: [
      "Type or paste the text you want to duplicate.",
      "Each word in the input is duplicated in the output instantly.",
      "Copy the result and use it where needed.",
    ],
    seoSections: [
      {
        title: "What a word duplicator does",
        paragraphs: [
          "A word duplicator takes each word in your input and repeats it immediately after itself. The sentence 'hello world' becomes 'hello hello world world'. This is different from repeating the whole sentence — each individual word is doubled.",
          "It is a simple but occasionally useful transformation for testing how UI components handle repeated words, generating stylized text, or creating repetition-based creative content.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does a word duplicator do?",
        answer:
          "It repeats each word in your text immediately after itself. 'hello world' becomes 'hello hello world world'.",
      },
      {
        question: "Is this the same as repeating the whole sentence?",
        answer:
          "No. A word duplicator doubles each individual word, while a text repeater repeats the full sentence or phrase multiple times.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. It is completely free and runs in your browser with no account needed.",
      },
    ],
    relatedToolSlugs: [
      "text-repeater",
      "word-counter",
      "text-reverser",
      "remove-extra-spaces",
    ],
  },
  {
    slug: "text-repeater",
    name: "Text Repeater",
    type: "generator",
    description: "Repeat any text a set number of times instantly.",
    metaTitle: "Text Repeater - Repeat Text Multiple Times Online",
    metaDescription:
      "Free online text repeater. Repeat any word, phrase, or sentence a set number of times instantly. Useful for testing, templates, and placeholder content.",
    examples: [
      {
        input: "Hello (3 times)",
        output: "Hello Hello Hello",
      },
      {
        input: "test (5 times, new line)",
        output: "test\ntest\ntest\ntest\ntest",
      },
    ],
    aboutText:
      "Use this text repeater to repeat any word, phrase, or sentence a set number of times instantly. It is useful for generating placeholder content, testing text fields, building repetition patterns for templates, and quickly creating repeated values without manual copy-pasting.",
    howToSteps: [
      "Enter the text you want to repeat.",
      "Set how many times you want it repeated.",
      "Copy the output and use it in your project or document.",
    ],
    seoSections: [
      {
        title: "What a text repeater is useful for",
        paragraphs: [
          "A text repeater lets you generate repeated text without manual effort. Instead of copying and pasting the same phrase dozens of times, you set a count and get the output instantly.",
          "It is commonly used for testing UI layouts with realistic-length content, generating placeholder text, building dummy data for forms, and creating repetition-based patterns in documents or templates.",
        ],
      },
      {
        title: "Repeating text for testing and development",
        paragraphs: [
          "Frontend developers often need to fill a component with repeated text to see how it handles long content or overflow. A text repeater speeds this up significantly compared to typing or pasting manually.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What does a text repeater do?",
        answer:
          "It repeats any text you enter a set number of times, either on the same line or on separate lines depending on your setting.",
      },
      {
        question: "Can I repeat text on separate lines?",
        answer:
          "Yes. You can choose whether repeated text appears on the same line separated by spaces, or on separate lines.",
      },
      {
        question: "Is this different from a word duplicator?",
        answer:
          "Yes. A text repeater repeats your entire input multiple times. A word duplicator repeats each individual word side by side within the sentence.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The text repeater is completely free and runs in your browser with no sign-up required.",
      },
    ],
    relatedToolSlugs: [
      "word-duplicator",
      "lorem-ipsum-generator",
      "word-counter",
      "remove-extra-spaces",
    ],
  },
  {
    slug: "image-resizer",
    name: "Image Resizer",
    type: "transformer",
    description: "Resize images to any dimension and download as PNG, JPEG, or WebP — all in your browser.",
    metaTitle: "Image Resizer - Resize Images Online Free",
    metaDescription:
      "Free online image resizer. Upload an image, set the dimensions, choose PNG, JPEG, or WebP, and download instantly. No upload to a server.",
    examples: [
      {
        input: "1920×1080 JPEG photo, resize to 800×450",
        output: "Resized JPEG at 800×450 px, ready to download",
      },
      {
        input: "PNG logo at 500×500, convert to WebP at 200×200",
        output: "WebP image at 200×200 px with quality control",
      },
    ],
    aboutText:
      "Use this image resizer to scale images to any dimensions directly in your browser. Upload a PNG, JPEG, or WebP image, set the target width and height, optionally lock the aspect ratio, choose an output format, and download the result. No image is uploaded to a server.",
    howToSteps: [
      "Drop an image onto the upload area or click to choose a file.",
      "Enter the target width or height. Enable Lock ratio to scale proportionally.",
      "Choose an output format (PNG, JPEG, or WebP) and adjust quality if needed.",
      "Click Download image to save the resized file.",
    ],
    seoSections: [
      {
        title: "Resize images without uploading them",
        paragraphs: [
          "This image resizer runs entirely in your browser using the Canvas API. Your image never leaves your device, which is useful when working with private or sensitive photos, design files, or company assets.",
          "You can resize to any custom pixel dimension and choose between PNG for lossless output, JPEG for smaller file sizes, or WebP for modern, efficient compression.",
        ],
      },
      {
        title: "Aspect ratio and quality",
        paragraphs: [
          "Locking the aspect ratio ensures the image does not get distorted when you change one dimension. The quality slider (available for JPEG and WebP) lets you balance file size against image sharpness.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Is my image uploaded to a server?",
        answer:
          "No. Resizing happens entirely in your browser using the HTML Canvas API. Your image is never sent anywhere.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "You can upload PNG, JPEG, and WebP images. The output can be saved as PNG, JPEG, or WebP regardless of the input format.",
      },
      {
        question: "Will resizing reduce image quality?",
        answer:
          "Scaling down is generally lossless in appearance. For JPEG and WebP output, you can control compression quality with the quality slider. PNG output is always lossless.",
      },
    ],
    relatedToolSlugs: [
      "base64-encoder-decoder",
      "color-converter",
      "qr-code-generator",
      "hash-generator",
    ],
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    type: "analyzer",
    description: "Calculate your exact age or the difference between two dates in years, months, and days.",
    metaTitle: "Age Calculator - Calculate Your Age Online",
    metaDescription:
      "Free online age calculator. Enter your date of birth to find your exact age in years, months, and days. Also calculates the difference between any two dates.",
    examples: [
      {
        input: "Date of birth: 1990-06-15",
        output: "36 years, 0 months, 17 days · Born on a Friday · 245 days until next birthday",
      },
      {
        input: "Date difference: 2024-01-01 to 2026-07-02",
        output: "2 years, 6 months, 1 day · 912 total days · 130 weeks",
      },
    ],
    aboutText:
      "Use this age calculator to find your exact age from your date of birth, or to calculate the difference between any two dates. Results show the breakdown in years, months, and days, plus total days and weeks.",
    howToSteps: [
      "Select Age Calculator to find your age, or Date Difference to compare two dates.",
      "Enter the date of birth or the two dates you want to compare.",
      "Read the result in years, months, days, and total days instantly.",
    ],
    seoSections: [
      {
        title: "What this calculator gives you",
        paragraphs: [
          "The age calculator takes a date of birth and tells you your exact age in years, months, and days as of today. It also shows the total number of days and weeks you have lived, which day of the week you were born on, and how many days remain until your next birthday.",
          "The date difference mode calculates the span between any two dates, which is useful for project timelines, anniversaries, deadlines, or any situation where you need to know how far apart two dates are.",
        ],
      },
      {
        title: "Accurate age calculation",
        paragraphs: [
          "Age is calculated precisely by accounting for varying month lengths and leap years, so the result in years, months, and days is always exact relative to today's date.",
        ],
      },
    ],
    faqItems: [
      {
        question: "How is my exact age calculated?",
        answer:
          "The calculator subtracts your birth date from today's date, accounting for different month lengths and leap years to give the precise number of years, months, and days.",
      },
      {
        question: "Can I calculate the difference between any two dates?",
        answer:
          "Yes. Switch to Date Difference mode and enter a start and end date. The order does not matter.",
      },
      {
        question: "Does the calculator account for leap years?",
        answer:
          "Yes. Leap years are handled automatically, so totals in days and weeks are always accurate.",
      },
    ],
    relatedToolSlugs: [
      "percentage-calculator",
      "unix-timestamp-converter",
      "word-counter",
      "number-base-converter",
    ],
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    type: "analyzer",
    description: "Calculate percentages, percentage change, and percentage of a number instantly.",
    metaTitle: "Percentage Calculator - Free Online Percent Calculator",
    metaDescription:
      "Free online percentage calculator. Find what percent of a number is, calculate percentage change, or increase and decrease a value by a percentage.",
    examples: [
      {
        input: "What is 15% of 200?",
        output: "30",
      },
      {
        input: "Percentage change from 80 to 100?",
        output: "+25%",
      },
    ],
    aboutText:
      "Use this percentage calculator to solve the most common percentage problems instantly. Choose from four calculation modes: finding a percentage of a number, finding what percent one number is of another, calculating percentage change, or adjusting a number up or down by a percentage.",
    howToSteps: [
      "Select the type of percentage calculation you need.",
      "Enter the numbers in the fields provided.",
      "Read the result instantly and copy it if needed.",
    ],
    seoSections: [
      {
        title: "Common percentage calculations",
        paragraphs: [
          "Percentage calculators are used in everyday situations such as working out discounts, tips, tax amounts, grade scores, salary changes, and statistical comparisons. Instead of doing mental math or reaching for a formula, this tool gives the answer as you type.",
          "The four modes cover the most common percentage questions: finding a percentage of a value, finding what percentage one number represents of another, calculating how much something increased or decreased, and applying a percentage change to a starting value.",
        ],
      },
      {
        title: "Percentage change explained",
        paragraphs: [
          "Percentage change measures how much a value grew or shrank relative to the original. A positive result means an increase and a negative result means a decrease. It is commonly used for price changes, growth rates, and performance comparisons.",
        ],
      },
    ],
    faqItems: [
      {
        question: "What is the formula for percentage of a number?",
        answer:
          "Multiply the number by the percentage and divide by 100. For example, 15% of 200 is (15 / 100) × 200 = 30.",
      },
      {
        question: "How do I calculate percentage change?",
        answer:
          "Subtract the original value from the new value, divide by the original value, and multiply by 100. A positive result is an increase and a negative result is a decrease.",
      },
      {
        question: "Can I calculate a discount with this tool?",
        answer:
          "Yes. Use the Increase / Decrease mode, enter the original price, select Decrease, and enter the discount percentage to get the final price.",
      },
    ],
    relatedToolSlugs: [
      "word-counter",
      "character-counter",
      "unix-timestamp-converter",
      "number-base-converter",
    ],
  },
  {
    slug: "number-base-converter",
    name: "Number Base Converter",
    type: "transformer",
    description: "Convert numbers between binary, octal, decimal, and hexadecimal instantly.",
    metaTitle: "Number Base Converter - Binary, Octal, Decimal, Hex",
    metaDescription:
      "Free online number base converter. Convert between binary, octal, decimal, and hexadecimal instantly. Type in any field and all others update live.",
    examples: [
      {
        input: "42 (decimal)",
        output: "BIN: 101010 · OCT: 52 · DEC: 42 · HEX: 2A",
      },
      {
        input: "FF (hexadecimal)",
        output: "BIN: 11111111 · OCT: 377 · DEC: 255 · HEX: FF",
      },
    ],
    aboutText:
      "Use this number base converter to switch between binary, octal, decimal, and hexadecimal. Type a number into any field and the other three update instantly. It is useful for programming, digital electronics, debugging low-level code, and understanding how numbers are represented in different bases.",
    howToSteps: [
      "Type a number into any of the four fields: binary, octal, decimal, or hex.",
      "All other fields update instantly with the converted values.",
      "Copy the value you need using the copy button on that row.",
    ],
    seoSections: [
      {
        title: "When to convert between number bases",
        paragraphs: [
          "Different programming contexts use different number bases. Decimal is everyday arithmetic. Binary is how computers store and process data at the hardware level. Hexadecimal is used in memory addresses, color codes, bytecode, and debugging output. Octal appears in Unix file permissions and some legacy systems.",
          "This converter lets you type into any base and see all four representations at once, which is faster than converting one step at a time.",
        ],
      },
      {
        title: "Binary, octal, decimal, and hex explained",
        paragraphs: [
          "Binary (base 2) uses only 0 and 1. Octal (base 8) uses digits 0 through 7. Decimal (base 10) is the standard number system. Hexadecimal (base 16) uses digits 0 through 9 and letters A through F. All four represent the same underlying value in different notations.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Can I type in any of the four fields?",
        answer:
          "Yes. Type into whichever base you already have, and the other three fields update instantly.",
      },
      {
        question: "Does this handle large numbers?",
        answer:
          "Yes. The converter uses BigInt internally, so it handles arbitrarily large integers without precision loss.",
      },
      {
        question: "Is hex input case sensitive?",
        answer:
          "No. You can type hex digits in upper or lowercase. The output is always shown in uppercase.",
      },
    ],
    relatedToolSlugs: [
      "hash-generator",
      "base64-encoder-decoder",
      "url-encoder-decoder",
      "random-string-generator",
    ],
  },
  {
    slug: "diff-checker",
    name: "Diff Checker",
    type: "analyzer",
    description: "Compare two texts and highlight the differences line by line.",
    metaTitle: "Diff Checker - Compare Text and Find Differences Online",
    metaDescription:
      "Free online diff checker. Paste two texts to compare them line by line and see exactly what changed, was added, or removed.",
    examples: [
      {
        input: "Original: 'Hello world'\nModified: 'Hello Toolzmint'",
        output: "− Hello world\n+ Hello Toolzmint",
      },
      {
        input: "Two versions of a config file or code snippet",
        output: "Added lines highlighted in green, removed lines in red, unchanged lines shown normally",
      },
    ],
    aboutText:
      "Use this diff checker to compare two pieces of text and see exactly what changed between them. It highlights added lines in green and removed lines in red, making it easy to spot edits in code, documents, configs, or any text.",
    howToSteps: [
      "Paste the original text in the left panel.",
      "Paste the modified text in the right panel.",
      "Review the highlighted diff below showing what was added, removed, or unchanged.",
    ],
    seoSections: [
      {
        title: "What a diff checker is used for",
        paragraphs: [
          "A diff checker compares two texts and shows exactly what changed between them. It is useful for reviewing edits in documents, comparing config files, spotting changes in code, or verifying that two versions of content match expectations.",
          "Instead of reading through both texts manually, a diff tool highlights the differences so you can focus only on what changed.",
        ],
      },
      {
        title: "Line-by-line comparison",
        paragraphs: [
          "This tool compares text line by line. Added lines in the modified version are shown in green and removed lines from the original are shown in red. Unchanged lines appear without highlighting so the overall structure stays readable.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Does this work for code?",
        answer:
          "Yes. You can paste any text including code, configuration files, JSON, markdown, or plain prose.",
      },
      {
        question: "How are differences calculated?",
        answer:
          "The tool uses a line-level diff algorithm to identify which lines were added, removed, or left unchanged between the two inputs.",
      },
      {
        question: "Is there a size limit?",
        answer:
          "There is no hard limit, but very large texts may take a moment to process since everything runs in your browser.",
      },
    ],
    relatedToolSlugs: [
      "json-formatter",
      "duplicate-line-remover",
      "line-sorter",
      "csv-to-json",
    ],
  },
  {
    slug: "csv-to-json",
    name: "CSV to JSON",
    type: "transformer",
    description: "Convert CSV data to JSON instantly with support for headers, custom delimiters, and pretty print.",
    metaTitle: "CSV to JSON Converter - Free Online Tool",
    metaDescription:
      "Convert CSV to JSON online instantly. Supports comma, semicolon, and tab delimiters with auto-detection, header row toggle, and pretty print.",
    examples: [
      {
        input: "name,age,city\nAlice,30,New York\nBob,25,London",
        output: '[{"name":"Alice","age":"30","city":"New York"},{"name":"Bob","age":"25","city":"London"}]',
      },
      {
        input: "id;product;price\n1;Widget;9.99\n2;Gadget;24.99",
        output: '[{"id":"1","product":"Widget","price":"9.99"},{"id":"2","product":"Gadget","price":"24.99"}]',
      },
    ],
    aboutText:
      "Use this CSV to JSON converter to transform spreadsheet or export data into JSON format directly in your browser. It supports comma, semicolon, and tab-delimited files with automatic delimiter detection, an optional header row, and pretty-printed or compact output.",
    howToSteps: [
      "Paste your CSV data into the input panel.",
      "The delimiter is detected automatically, or you can select one manually.",
      "Toggle whether the first row is a header and whether to pretty-print the output.",
      "Copy the JSON result from the output panel.",
    ],
    seoSections: [
      {
        title: "When to convert CSV to JSON",
        paragraphs: [
          "CSV is a common export format from spreadsheets, databases, and analytics tools. JSON is the standard format for APIs, web apps, and developer workflows. Converting between them is a frequent task when working with data exports or preparing data for code.",
          "This tool handles the conversion in your browser without uploading your data anywhere, which is useful when working with sensitive or proprietary data.",
        ],
      },
      {
        title: "Headers, delimiters, and output format",
        paragraphs: [
          "If your CSV has a header row, each JSON object will use those headers as keys. Without headers, the output is an array of arrays. The tool auto-detects whether the delimiter is a comma, semicolon, or tab, but you can also set it manually.",
        ],
      },
    ],
    faqItems: [
      {
        question: "Does this handle quoted fields with commas inside?",
        answer:
          "Yes. The parser follows standard CSV quoting rules, so fields enclosed in double quotes can contain commas, newlines, and escaped quotes.",
      },
      {
        question: "What if my CSV uses semicolons instead of commas?",
        answer:
          "Select Semicolon as the delimiter, or leave it on Auto and the tool will detect it from the first row.",
      },
      {
        question: "Can I convert CSV without a header row?",
        answer:
          "Yes. Toggle off the first-row-as-header option and each row will be output as a JSON array instead of a named object.",
      },
    ],
    relatedToolSlugs: [
      "json-formatter",
      "duplicate-line-remover",
      "line-sorter",
      "base64-encoder-decoder",
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
      {
        title: "Online line removal for copied text",
        paragraphs: [
          "Online line removal is a common task when copying text from PDFs, emails, or web pages that preserve their original formatting. Instead of pressing backspace on each line manually, you can paste the text and complete line removal in one step.",
          "This free line removal tool runs entirely in your browser. No sign-up, no install, and no data is sent to a server. Paste your text, and the cleaned output is ready to use immediately.",
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
      {
        question: "How do I perform line removal from copied text?",
        answer:
          "Paste the text with line breaks into the input area. Line removal happens automatically and the cleaned single-line output appears instantly, ready to copy.",
      },
      {
        question: "Can I remove line breaks from PDF text?",
        answer:
          "Yes. Text copied from PDFs often has a line break after each line of the original page layout. Paste it here and all the breaks are removed to produce clean, readable text.",
      },
      {
        question: "Does this work for removing line breaks from emails?",
        answer:
          "Yes. Forwarded or copied email text often contains line breaks from the original message formatting. This tool removes them so you can paste the content cleanly into other fields or documents.",
      },
      {
        question: "Is this line break remover free?",
        answer:
          "Yes. The tool is completely free with no account required. Everything runs in your browser and nothing is stored.",
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
