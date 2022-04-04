// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Defines a Phrase object.

function Phrase(content) {
  this.content = content;

  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }

  // Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
}

TranslatedPhrase.prototype = new Phrase();
}
