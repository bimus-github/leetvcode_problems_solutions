function lengthOfLongestSubstring(s) {
  const lengths = [];

  const lengthOfS = s.length;

  for (let i = 0; i < lengthOfS; i++) {
    let char = s[i];
    let charsTheChar = s.slice(i + 1, lengthOfS);

    for (let j = 0; j < charsTheChar.length; j++) {
      if (char.includes(charsTheChar[j])) {
        break;
      } else {
        char += charsTheChar[j];
      }
    }

    lengths.push(char.length);
  }
  return Math.max(...lengths);
}

const reslut = lengthOfLongestSubstring("abcabcbb");

console.log(reslut);
