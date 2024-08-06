// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverse(x) {
  let result = parseInt((+x).toString().split("").reverse().join(""));
  if (x < 0) result = -result;
  return result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31) ? 0 : result;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
