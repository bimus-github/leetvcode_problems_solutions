// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * The isPalindrome function checks if a given integer is a palindrome.
 * A palindrome is a number that reads the same backwards as forwards.
 *
 * @param {number} x - The integer to be checked.
 * @return {boolean} Returns true if the integer is a palindrome, false otherwise.
 */
function isPalindrome(x) {
  // If the number is negative, it cannot be a palindrome.
  if (x < 0) return false;

  // If the number is a single digit, it is a palindrome.
  if (x < 10) return true;

  // If the number is a multiple of 10, it cannot be a palindrome.
  if (x % 10 === 0) return false;

  // Initialize a variable to hold the reversed number.
  let reversed = 0;

  // Reverse the number by appending the last digit to the reversed number.
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // If the original number is equal to the reversed number or its last digit has been consumed, it is a palindrome.
  return x === reversed || x === Math.floor(reversed / 10);
}
