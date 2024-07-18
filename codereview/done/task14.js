// 14

function matchCharacters(...str) {
  const firstStringChars = {};
  for (let char of str[0]) {
    firstStringChars[char] = (firstStringChars[char] || 0) + 1;
  }
  return str.every((word) => {
    const currentStringChars = { ...firstStringChars };
    for (let char of word) {
      if (!currentStringChars[char]) {
        return false;
      }
      currentStringChars[char]--;
    }
    return Object.values(currentStringChars).every((count) => count === 0);
  });
}

console.log(matchCharacters('кот', 'ток', 'окт'));
console.log(matchCharacters('кот', 'ком'));
console.log(matchCharacters('аларм', 'малар', 'армал', 'рамал'));
