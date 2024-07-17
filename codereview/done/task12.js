// 12

function createBoard(x = 5, y = 5) {
  let str1 = "";
  let str2 = "";

  for (let i = 0; i < y; i++) {
    str1 += "_#";
    str2 += "#_";
  }

  let board = "";
  for (let j = 0; j < x; j++) {
    if (j % 2 === 0) {
      board += str1 + "\n";
    } else {
      board += str2 + "\n";
    }
  }
  console.log(board);
}

createBoard();
