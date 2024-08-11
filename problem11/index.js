// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// The maxArea function takes an array of integers representing the height of lines drawn vertically.
// It uses a two-pointer approach to find the maximum area that can be contained by two lines and the x-axis.
// The function initializes three variables: max to store the maximum area, left to keep track of the left pointer, and right to keep track of the right pointer.
// The function then enters a while loop that continues until the left pointer is less than the right pointer.
// Inside the loop, the function calculates the area between the lines represented by the left and right pointers.
// It uses the min function to find the smaller height between the two lines and multiplies it by the distance between the two pointers.
// The function then updates the max variable if the current area is greater than the previous maximum.
// Depending on which line's height is smaller, the function moves the left or right pointer accordingly.
// This process continues until the left pointer is equal to the right pointer, at which point the while loop ends.
// Finally, the function returns the maximum area stored in the max variable.
function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
