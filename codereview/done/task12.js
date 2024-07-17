// 12

function createBoard(x = 5, y = 5) {
  let white = "_";
  let black = "#";
  let str1 = "";
  let str2 = "";
  
     
    for (let i = 0; i < y; i++) {
      str1 = str1 + white + black;
      str2 = str2 + black + white;
    }
  for (let j = 0; j < x; j++) {     
    if (j % 2 == 0) {
      console.log(str1)
    } else {
      console.log(str2)
    }
  }
}

createBoard()