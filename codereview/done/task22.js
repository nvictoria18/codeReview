// 22

function inc() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const counter = inc();
console.log(counter(), counter(), counter());