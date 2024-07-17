// 20



const tree = {
  a: {
    a: 1,
    b: {
      a: 0,
      b: 1
    },
    c: 0
  },
  b: 0,
  c: 1
};

console.log(inverse(tree));

function inverse(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      inverse(obj[key]);
    } else if (typeof obj[key] === 'number') {
      obj[key] = obj[key] === 0 ? 1 : 0;
    }
  }
  return obj;
}