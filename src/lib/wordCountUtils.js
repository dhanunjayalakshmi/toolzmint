export const READING_WPM = 200;
export const SPEAKING_WPM = 130;

// A token counts as a word only if it has a letter or digit, so stray
// punctuation like " — " or " & " is not counted.
const HAS_WORD_CHAR = /[\p{L}\p{N}]/u;

export const countWords = (text) =>
  text.split(/\s+/).filter((token) => HAS_WORD_CHAR.test(token)).length;

// Split on ., ! or ? only when followed by whitespace or the end of the text,
// so decimals like 3.5 and URLs like toolzmint.com stay inside one sentence.
export const countSentences = (text) =>
  text
    .split(/[.!?]+(?=\s|$)/)
    .filter((part) => HAS_WORD_CHAR.test(part)).length;

export const countParagraphs = (text) =>
  text.split(/\n\s*\n/).filter((part) => part.trim()).length;

export const formatMinutes = (words, wordsPerMinute) => {
  if (words === 0) return "0 min";
  if (words < wordsPerMinute) return "< 1 min";
  return `${Math.ceil(words / wordsPerMinute)} min`;
};

export const getTextStats = (text) => {
  const words = countWords(text);

  return {
    words,
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, "").length,
    sentences: countSentences(text),
    paragraphs: countParagraphs(text),
    readingTime: formatMinutes(words, READING_WPM),
    speakingTime: formatMinutes(words, SPEAKING_WPM),
  };
};

export const getLimitStatus = (words, limit) => {
  if (!limit || limit < 1) return null;

  const remaining = limit - words;

  return {
    percent: Math.min(100, Math.floor((words / limit) * 100)),
    isOver: remaining < 0,
    message:
      remaining < 0
        ? `${Math.abs(remaining)} ${Math.abs(remaining) === 1 ? "word" : "words"} over your limit`
        : `${remaining} ${remaining === 1 ? "word" : "words"} left`,
  };
};
