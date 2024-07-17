// 3

function convertToObject(str) {
  let obj = {};
  let arr = str.split("");
  arr.reduce((acc, el) => {
    acc[el] = {};
    return acc[el];
  }, obj);
  return obj;
}

console.log(convertToObject('abc')); // { a: { b: { c: {} } } }
