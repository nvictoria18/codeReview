// 21 

// const test = [
//   1,
//   2,
//   [[3], 4, [5, [11], 9]],
//   {
//     one: 1,
//     two: {
//       bar: 'pop',
//       three: {
//         foo: 33,
//         name: 'oleg',
//         olga: true,
//         unic: { in: 'in' }
//       }
//     }
//   },
//   ['098', [33, 44, [[12], 1, [56]]]]
// ];

// console.log(flat(test)) // должно вернуть [1, 2, 3, 4, 5, 11, 9, { one: 1, bar : 'pop', foo: 33, name: 'oleg', olga: true, in: 'in' }, '098', 33, 44, 12, 1, 56]

// const test2 = {
//   foo: {
//     one: 1,
//     two: {
//       bar: 'pop',
//       three: {
//         foo2: 33,
//         name: 'oleg',
//         olga: true,
//         unic: { in: 'in' }
//       }
//     },
//     abc: [
//       1,
//       2,
//       [[3], 4, [5, [11], 9]],
//       ['098', [33, 44, [[12], 1, [56]]]]
//     ]
//   },
// } 

// console.log(flat(test2)) // вернет {one: 1, bar: 'pop', foo2: 33, name: 'oleg', olga: true, in: 'in', abc: [1, 2, 3, 4, 5, 11, 9, '098', 33, 44, 12, 1, 56]},

// function flat(obj, depth = 1) {
//   if (depth <= 0) {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.flatMap(item => flat(item, depth - 1));
//   }

//   if (typeof obj === 'object') {
//     const result = {};

//     for (const key in obj) {
//       const value = flat(obj[key], depth - 1);

//       if (Array.isArray(value)) {
//         result[key] = value;
//       } else {
//         Object.assign(result[key] || (result[key] = {}), value);
//       }
//     }

//     return result;
//   }

//   return obj;
// }
