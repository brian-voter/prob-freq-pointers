"use strict"

/**
 * Takes two arrays of possibly-different lengths.
 * The first array consists of keys and the second one
 * consists of values.
 * Returns an object created from the keys
 * and values. If there are not enough values,
 * the rest of keys have a value of null.
 * If there not enough keys, ignores the rest of values.
 *
 * @param {*[]} keys the keys to put in the object
 * @param {*[]} values the values to assign to the keys
 * @returns {object} the resulting object
 */
function twoArrayObject(keys, values) {
  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = (values[i] || null);
  }

  return obj;
}