"use strict";

// I O C Edge/test

/*
input: 2 strings: word, letters
output: return boolean iff word can be spelled with
letters

only lowercase letters

each letter can be used once

runtime must be linear in the length of the two strings


if length of letters < length of word, return false

if word === "" return true

idea: frequency counters

freq counter for word

for letters
 if (letters[i] in freq)

  count[letters[i]] -= 1

for
*/

/**
 * Determines if a string 'word' can be spelled with the letters in the string 'letters'
 * assuming each letter can be used only once. Both strings must contain only lowercase
 * letters.
 *
 * @param {string} word the string we are trying to spell
 * @param {string} letters the letters we have available
 * @returns true if word can be spelled with the letters in letters, else false TODO: boolean in brackets
 */
function canConstructWord(word, letters) {
  if (word.length === 0) {
    return true;
  }

  if (word.length > letters.length) {
    return false;
  }

  const neededLetters = getFrequencyCounter(word);
  const availLetters = getFrequencyCounter(letters);

  for (let letter in neededLetters) {
    if (!(letter in availLetters)) {
      return false;
    }

    if (neededLetters[letter] > availLetters[letter]) {
      return false;
    }
  }

  return true;
}

/**
 * Counts the number of times each element of items appears
 * @param {*} items the items to count
 * @returns an object mapping a key for each unique item to the number of times
 * the item appears total
 */
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}



