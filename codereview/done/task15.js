// 15

Array.prototype.mapPolifile = function (callback, thisArg) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
      newArr[i] = callback.call(thisArg, thisArg[i], i, this);
  }
  return newArr;
}

let arr = [1, 2, 3];

arr.mapPolifile((el, i, arr) => console.log(el, i, arr, thisArg));
