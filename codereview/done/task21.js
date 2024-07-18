// 21 

const test = [
  1,
  2,
  [[3], 4, [5, [11], 9]],
  {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    }
  },
  ['098', [33, 44, [[12], 1, [56]]]]
];

// должно вернуть [1, 2, 3, 4, 5, 11, 9, { one: 1, bar : 'pop', foo: 33, name: 'oleg', olga: true, in: 'in' }, '098', 33, 44, 12, 1, 56]

const test2 = {
  foo: {
    one: 1,
    two: {
      bar: 'pop',
      three: {
        foo2: 33,
        name: 'oleg',
        olga: true,
        unic: { in: 'in' }
      }
    },
    abc: [
      1,
      2,
      [[3], 4, [5, [11], 9]],
      ['098', [33, 44, [[12], 1, [56]]]]
    ]
  },
} 

// вернет {one: 1, bar: 'pop', foo2: 33, name: 'oleg', olga: true, in: 'in', abc: [1, 2, 3, 4, 5, 11, 9, '098', 33, 44, 12, 1, 56]},

function flat(input) {
  let result = [];

  function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        flattenArray(item);
      } else if (typeof item === 'object' && item !== null) {
        result.push(flatObject(item));
      } else {
        result.push(item);
      }
    }
  }

  function flatObject(obj) {
    let flatObj = {};
    for (let key in obj) {
      let value = obj[key];
      if (Array.isArray(value)) {
        flatObj[key] = [];
        flattenArray(value);
        flatObj[key] = result;
        result = [];
      } else if (typeof value === 'object' && value !== null) {
        flatObj = {...flatObj, ...flatObject(value)};
      } else {
        flatObj[key] = value;
      }
    }
    return flatObj;
  }

  if (Array.isArray(input)) {
    flattenArray(input);
    return result;
  } else if (typeof input === 'object' && input !== null) {
    return flatObject(input);
  } else {
    throw new Error('Input must be an array or an object');
  }
}
console.log(flat(test2));
console.log(flat(test));




