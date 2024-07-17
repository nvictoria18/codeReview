// 10 

// const tree = {
//   value: 1,
//   next: [
//     {
//       value: 2,
//       next: null,
//     },
//     {
//       value: 2,
//       next: {
//         value2: 4,
//         next: null,
//       },
//     },
//   ],
//   foo: {
//     bar: {
//       baz: [
//         { value: 9 },
//         {
//           value: 2,
//           next: {
//             value: 4,
//             next: null,
//           },
//         },
//       ],
//     },
//     baz: 33,
//     value: 1,
//   },
// };

// function sum(obj, key) {
//   let total = 0;

//   if (Array.isArray(obj)) {
//     obj.forEach(item => {
//       total += sum(item, key);
//     });
//   } else if (obj !== null && typeof obj === 'object') { 
//     if (key in obj) {
//       total += obj[key];
//     }

//     for (const prop in obj) {
//       if (typeof obj[prop] === 'object') {
//         total += sum(obj[prop], key);
//       }
//     }
//   }

//   return total;
// }

// console.log(sum(tree, 'value')); // 21