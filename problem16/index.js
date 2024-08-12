// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

function threeSum(nums, target) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
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

function threeSumClosest(nums, target) {
  let closest = target;
  let delta = 0;
  let sign = 1;

  while (threeSum(nums, closest).length !== 0) {
    closest += sign * delta;
    delta++;
    sign = sign * -1;
  }

  return threeSum(nums, closest);
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([1, 1, -1], 0));
console.log(threeSumClosest([1, 1, 1, 0], -100));
console.log(threeSumClosest([0, 0, 0], 1));
