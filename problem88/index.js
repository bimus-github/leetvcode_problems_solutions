// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge(nums1, m, nums2, n) {
  const lastIndexOfNums1 = m - 1;
  const lastIndexOfNums2 = n - 1;

  for (let i = 0; i <= lastIndexOfNums2; i++) {
    nums1[lastIndexOfNums1 + i + 1] = nums2[i] || 0;
  }

  nums1.sort((a, b) => a - b);

  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([5, 6, 7, 0, 0, 0, 0], 3, [1, 2, 3, 4], 4);
