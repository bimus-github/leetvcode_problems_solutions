// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest.
// Converting a decimal place value into a Roman numeral has the following rules:
// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input,
// append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol,
// for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are
// used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10.
// You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

function getFirstSymbol(num) {
  switch (num) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    default:
      return "";
  }
}

function getSecondSymbol(num) {
  switch (num) {
    case 1:
      return "X";
    case 2:
      return "XX";
    case 3:
      return "XXX";
    case 4:
      return "XL";
    case 5:
      return "L";
    case 6:
      return "LX";
    case 7:
      return "LXX";
    case 8:
      return "LXXX";
    case 9:
      return "XC";
    default:
      return "";
  }
}

function getThirdSymbol(num) {
  switch (num) {
    case 1:
      return "C";
    case 2:
      return "CC";
    case 3:
      return "CCC";
    case 4:
      return "CD";
    case 5:
      return "D";
    case 6:
      return "DC";
    case 7:
      return "DCC";
    case 8:
      return "DCCC";
    case 9:
      return "CM";
    default:
      return "";
  }
}

function getFourthSymbol(num) {
  switch (num) {
    case 1:
      return "M";
    case 2:
      return "MM";
    case 3:
      return "MMM";
    default:
      return "";
  }
}

function intToRoman(num) {
  let result = "";
  result += getFourthSymbol(Math.floor(num / 1000));
  result += getThirdSymbol(Math.floor(num / 100) % 10);
  result += getSecondSymbol(Math.floor(num / 10) % 10);
  result += getFirstSymbol(num % 10);
  return result;
}

console.log(intToRoman(1994)); // Output: "MCMXCIV"
console.log(intToRoman(3)); // Output: "III"
console.log(intToRoman(4)); // Output: "IV"
console.log(intToRoman(9)); // Output: "IX"
console.log(intToRoman(58)); // Output: "LVIII"
console.log(intToRoman(1990)); // Output: "MCMXC"
