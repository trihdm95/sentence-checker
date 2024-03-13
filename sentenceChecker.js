const nlp = require('compromise');

function doesSentenceMakeSense(sentence) {
  const doc = nlp(sentence);
  // This is a very basic check: if the sentence has a noun and a verb, we'll say it makes sense.
  // This is overly simplistic and should be expanded based on your actual criteria.
  const hasNoun = doc.nouns().out('array').length > 0;
  const hasVerb = doc.verbs().out('array').length > 0;
  return hasNoun && hasVerb;
}

module.exports = { doesSentenceMakeSense };