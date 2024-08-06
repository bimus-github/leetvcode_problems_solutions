// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
// The algorithm for myAtoi(string s) is as follows:
// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached.
// If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range.
// Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

function myAtoi(s) {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = 0;
  let sign = 1;
  let i = 0;

  while (i < s.length && s[i] === " ") {
    i++;
  }

  if (i < s.length && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }

  while (i < s.length && nums.includes(s[i])) {
    result = result * 10 + Number(s[i]);
    i++;
  }

  if (result > 2147483647) {
    return sign === 1 ? 2147483647 : -2147483648;
  }

  return sign * result;
}

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
