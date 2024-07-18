// 2

// 1 вариант

// let const = new Array(50);

// for (let i = 0; i < arr.length; i++) {
//    arr[i] = i + 1;
//}

// console.log(arr);

// 2 вариант

// const arr = [];

// for (let i = 1; i <= 50; i++) {
//     arr.push(i)
// }

// console.log(arr);

// 3 вариант

const arr = Array.from({length: 50}, (_, i) => i + 1);
console.log(arr);
