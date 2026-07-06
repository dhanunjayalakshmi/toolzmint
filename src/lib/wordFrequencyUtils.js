const STOP_WORDS = new Set([
  "a","about","above","after","again","against","all","am","an","and","any","are","aren't",
  "as","at","be","because","been","before","being","below","between","both","but","by",
  "can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't",
  "down","during","each","few","for","from","further","get","got","had","hadn't","has",
  "hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's",
  "hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if",
  "in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't",
  "my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our",
  "ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's",
  "should","shouldn't","so","some","such","than","that","that's","the","their","theirs",
  "them","themselves","then","there","there's","these","they","they'd","they'll","they're",
  "they've","this","those","through","to","too","under","until","up","very","was","wasn't",
  "we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's",
  "where","where's","which","while","who","who's","whom","why","why's","will","with",
  "won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours",
  "yourself","yourselves",
]);

export const SORT_OPTIONS = [
  { id: "freq-desc", label: "Most frequent" },
  { id: "freq-asc",  label: "Least frequent" },
  { id: "alpha",     label: "Alphabetical" },
];

export function countWordFrequency(text, {
  caseSensitive  = false,
  ignoreStopWords = false,
  minLength      = 1,
  sortBy         = "freq-desc",
} = {}) {
  if (!text.trim()) return { words: [], totalWords: 0, uniqueWords: 0 };

  const normalized = caseSensitive ? text : text.toLowerCase();
  const rawWords   = normalized.match(/\b[a-zA-Z']+\b/g) ?? [];

  const filtered = rawWords.filter((w) => {
    if (w.length < minLength) return false;
    if (ignoreStopWords && STOP_WORDS.has(w.toLowerCase())) return false;
    return true;
  });

  const freq = {};
  for (const word of filtered) {
    freq[word] = (freq[word] ?? 0) + 1;
  }

  const totalWords = filtered.length;
  let entries = Object.entries(freq).map(([word, count]) => ({
    word,
    count,
    pct: totalWords > 0 ? ((count / totalWords) * 100).toFixed(1) : "0.0",
  }));

  if (sortBy === "freq-desc") entries.sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));
  else if (sortBy === "freq-asc") entries.sort((a, b) => a.count - b.count || a.word.localeCompare(b.word));
  else entries.sort((a, b) => a.word.localeCompare(b.word));

  return { words: entries, totalWords, uniqueWords: entries.length };
}

export function wordsToCSV(words) {
  const header = "word,count,percentage";
  const rows = words.map(({ word, count, pct }) => `${word},${count},${pct}%`);
  return [header, ...rows].join("\n");
}
