// 24 что будет в консоли // [2, 1, 1, 2, 0, 3]




let arr = [[1, 2], [0, 3]];
arr = arr.reduce((acc, curr) => { return acc.concat(curr)});
console.log(arr);

// Как изменится результат если убрать [2, 1] // [1, 2, 0, 3]