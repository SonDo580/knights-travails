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

function nextMove(row, col, endRow, endCol) {
  let vertices = [];
  vertices.push([row, col]);

  if (row === endRow && col === endCol) {
    return vertices;
  }

  let vertices1,
    vertices2,
    vertices3,
    vertices4,
    vertices5,
    vertices6,
    vertices7,
    vertices8;

  if (row - 2 >= 0) {
    if (col - 1 >= 0) {
      vertices1 = [...vertices, ...nextMove(row - 2, col - 1, endRow, endCol)];
    }
    if (col + 1 <= 7) {
      vertices2 = [...vertices, ...nextMove(row - 2, col + 1, endRow, endCol)];
    }
  }

  if (row + 2 <= 7) {
    if (col - 1 >= 0) {
      vertices3 = [...vertices, ...nextMove(row + 2, col - 1, endRow, endCol)];
    }
    if (col + 1 <= 7) {
      vertices4 = [...vertices, ...nextMove(row + 2, col + 1, endRow, endCol)];
    }
  }

  if (row - 1 >= 0) {
    if (col - 2 >= 0) {
      vertices5 = [...vertices, ...nextMove(row - 1, col - 2, endRow, endCol)];
    }
    if (col + 2 <= 7) {
      vertices6 = [...vertices, ...nextMove(row - 1, col + 2, endRow, endCol)];
    }
  }

  if (row + 1 <= 7) {
    if (col - 2 >= 0) {
      vertices7 = [...vertices, ...nextMove(row + 1, col - 2, endRow, endCol)];
    }
    if (col + 2 <= 7) {
      vertices8 = [...vertices, ...nextMove(row + 1, col + 2, endRow, endCol)];
    }
  }

  return vertices;
}

console.log(nextMove(1, 3, 4, 3));
