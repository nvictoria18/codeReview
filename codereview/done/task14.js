// 14



function matchCharacters(...str) {
  const firstStringChars = {};
  for (let char of str[0]) {
    firstStringChars[char] = (firstStringChars[char] || 0) + 1;
  }
  for (let i = 1; i < str.length; i++) {
    const currentStringChars = { ...firstStringChars };

    for (let char of str[i]) {
      if (!currentStringChars[char]) {
        return false;
      }
      currentStringChars[char]--;
    }

    for (let key in currentStringChars) {
      if (currentStringChars[key] !== 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(matchCharacters('кот', 'ток', 'окт')); 
console.log(matchCharacters('кот', 'ком')); 
console.log(matchCharacters('аларм', 'малар', 'армал', 'рамал')); 