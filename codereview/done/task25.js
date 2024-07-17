// 25

const result = uniqueNonConsecutiveElements("hello");
console.log(result);

function uniqueNonConsecutiveElements(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result.push(str[i]);
    }
  }

  return result;
}