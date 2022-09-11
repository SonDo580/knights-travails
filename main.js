function createBoard() {
  let arr = [];

  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push("");
    }
    arr.push(row);
  }

  return arr;
}

let gameBoard = createBoard();
// console.log(gameBoard);

function knightMoves(vertex1, vertex2) {
  let startRow = vertex1[0];
  let startCol = vertex1[1];
  let endRow = vertex2[0];
  let endCol = vertex2[1];
}

function nextMove(row, col) {
  if (row - 2 >= 0) {
    if (col - 1 >= 0) {
    }
  }
}
