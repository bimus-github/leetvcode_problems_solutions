// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

function romanValues(char) {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

function romanToInt(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && romanValues(s[i]) < romanValues(s[i + 1])) {
      result -= romanValues(s[i]);
    } else {
      result += romanValues(s[i]);
    }
  }
  return result;
}
