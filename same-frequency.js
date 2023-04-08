"use strict";

/**
 * constructs an object with the keys being elements from input, and
 * values being the number of times that value appears;
 * @param {*} items
 * @returns {object}
 */

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

/**
 * converts the input numbers to strings, determines if
 * occurences of values from each num (toString) are equivalent;
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
    return false;
  }

  const freqs1 = getFrequencyCounter(num1);
  const freqs2 = getFrequencyCounter(num2);

  for (let key in freqs1) {
    if (!(key in freqs2)) {
      return false;
    }

    if (freqs2[key] !== freqs1[key]) {
      return false;
    }
  }
  return true;
}
