// 19



let string = "AAADDDGFFFAAR"

function getNumberCharacters(str) {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += count > 1 ? count + str[i] : str[i];
      count = 1;
    }
  }
  return result;
}

console.log(getNumberCharacters(string))