// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * This function takes an array of integers nums and returns all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * It uses a two-pointer approach to find the triplets.
 * It first sorts the array in non-decreasing order.
 * Then, for each element in the array, it initializes left and right pointers.
 * It then enters a while loop that continues until the left pointer is less than the right pointer.
 * Inside the loop, it calculates the sum of the current element, the element at the left pointer, and the element at the right pointer.
 * If the sum is equal to 0, it adds the triplet to the result array and moves the left and right pointers accordingly.
 * If the sum is less than 0, it moves the left pointer to the right.
 * If the sum is greater than 0, it moves the right pointer to the left.
 * After finding all the triplets for the current element, it skips any duplicate elements.
 * Finally, it returns the result array.
 *
 * @param {number[]} nums - The input array of integers.
 * @return {number[][]} The array of triplets that sum to 0.
 */
function threeSum(nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }

    while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
