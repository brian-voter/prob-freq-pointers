"use strict";
// input: sorted array of numbers and a target average (num);
// output: boolean;

// declare a function averagePair;
// declare variables (left and right) to assigned value of nums[0] & nums[length - 1];
// whgile left < right, iterate over the input nums array;
// compute average of each pair of nums (left and right);
// if that avg === targetAvg, return true;
// else, decrement right/ increment left to keep looking for pair;
// if no pair is found, return false;

/**
 *
 * @param {number []} nums
 * @param {number} targetAvg
 * @returns true if two nums are found whose avg equals targetAvg;
 *    otherwise, returns false;
 */

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const ave = (nums[left] + nums[right]) / 2;

    if (ave === targetAvg) {
      return true;
    } else if (ave < targetAvg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
