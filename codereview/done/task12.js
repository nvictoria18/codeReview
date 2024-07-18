// 12

function createBoard(x = 5, y = 5) {
  const row = "_#".repeat(y);
  let board = "";
  for (let i = 0; i < x; i++) {
    board += i % 2 === 0 ? row + "\n" : row.split("").reverse().join("") + "\n";
  }
  return board;
}

console.log(createBoard());

