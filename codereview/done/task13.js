// 13

function enterString(separator, ...args) {
  return args.join(separator);
}

console.log(enterString('-', '1', 'b', '1c')); // '1-b-1c'

