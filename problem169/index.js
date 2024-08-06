// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// The function takes an array of numbers as input and returns the element that appears more than half the time.
// We can solve this problem by using a hash map to keep track of the frequency of each element.
// We iterate through the array and check if the current element is already in the hash map.
// If it is, we increment its frequency by 1. If it isn't, we add it to the hash map with a frequency of 1.
// After the iteration, we check if any element's frequency is greater than the length of the array divided by 2.
// If we find such an element, we return it, because it is the majority element.
// If we don't find any such element, the function returns undefined.
function majorityElement(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
    if (map[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3, 1, 1, 1, 2, 2]));
