// 8



Array.prototype.myReverse = function() {
  if (this.length <= 1) {
    return this;
  }
  const last = this.pop();
  this.myReverse();
  this.unshift(last);
  return this;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.myReverse());