// 3

function convertToObject(str) {
  const obj = {};
  let currentObj = obj;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!currentObj[char]) {
      currentObj[char] = {};
    }
    currentObj = currentObj[char];
  }

  return obj;
}

console.log(convertToObject('abc'));