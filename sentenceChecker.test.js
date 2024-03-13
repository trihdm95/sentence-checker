const { doesSentenceMakeSense } = require('./sentenceChecker');

test('checks if a sentence makes sense', () => {
  // Example sentences
  expect(doesSentenceMakeSense('The quick brown fox jumps over the lazy dog.')).toBe(true);
  expect(doesSentenceMakeSense('Sky blue.')).toBe(false); // This lacks a verb, assuming "Sky" is treated as a noun.
  expect(doesSentenceMakeSense('Run fast.')).toBe(false); // Imperative sentence, verb but no explicit noun.
});