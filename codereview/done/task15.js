// 15

Array.prototype.mapPolifile = function (callback, thisArg = this) {
  if (!Array.isArray(thisArg)) {
    throw new TypeError('mapPolifile can only be called on arrays');
  }
  const newArr = [];
  for (let i = 0; i < thisArg.length; i++) {
    newArr[i] = callback.call(thisArg, thisArg[i], i, thisArg);
  }
  return newArr;
}

let a = [1, 2, 3];


a = a.mapPolifile((el, i, arr) => console.log(el));
console.log(a);

