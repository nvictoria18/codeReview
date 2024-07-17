// 7

function sum(n1) {
    if (arguments.length > 1) {
      let n2 = arguments[1];
      return n1 + n2;
    } else {
      return function(n2) {
        if (typeof n2 === 'undefined') {
          return n1;
        } else {
          return n1 + n2;
        }
      }
    }
  }
  
console.log(sum(1, 2)); // 3
console.log(sum(1)(2)); // 3
  

