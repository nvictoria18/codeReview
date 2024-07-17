// 22

function inc() {
  let count = 0;
  return function() {
    return ++count;
  }
}

const counter = inc();
console.log(counter(), counter(), counter());