// 3

function convertToObject(str) {
  const obj = {};
  const arr = str.split("");
  arr.reduce((acc, el) => {
    acc[el] = {};
    return acc[el];
  }, obj);
  return obj;
}

console.log(convertToObject('abc')); // { a: { b: { c: {} } } }
