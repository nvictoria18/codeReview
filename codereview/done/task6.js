// 6

// const first = [1,3,3,5];
// const second = [3,5,5,6];

// const getMatchedNumbers = (firstArr, secondArr) => {
//   const res = {
//     matched: [],
//     different: [],
//   }
//   for (let i = 0; i < firstArr.length; i++) {
//       for(let j = 0; j < secondArr.length; j++) {
//           if (firstArr[i] === secondArr[j]) {
//               res.matched.push(firstArr[i])
//           } else if (secondArr[j] !== firstArr[i]){
//             res.different.push(secondArr[j], firstArr[i])
//           }
//       }
//   }
//     res.matched = [...new Set(res.matched)];
//     res.different = [...new Set(res.different)];
//     for (let i = 0; i < res.matched.length; i++) {
//         for (let j = 0; j < res.different.length; j++) {
//             if (res.matched[i] === res.different[j]) {
//                 res.different.splice(j, 1); 
//             }
//         }
//     }
//     return res;
// }
// console.log(getMatchedNumbers(first, second));