const SIDE = 8;

function createBoard() {
  let arr = [];

  for (let i = 0; i < SIDE; i++) {
    let row = [];
    for (let j = 0; j < SIDE; j++) {
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
  // let vertices = [];
  // vertices.push([row, col]);
  // if (row === endRow && col === endCol) {
  //   return vertices;
  // }
  // let paths = [];
  // if (row - 2 >= 0) {
  //   if (col - 1 >= 0) {
  //     paths.push([...vertices, ...nextMove(row - 2, col - 1, endRow, endCol)]);
  //   }
  //   if (col + 1 < SIDE) {
  //     paths.push([...vertices, ...nextMove(row - 2, col + 1, endRow, endCol)]);
  //   }
  // }
  // if (row + 2 < SIDE) {
  //   if (col - 1 >= 0) {
  //     paths.push([...vertices, ...nextMove(row + 2, col - 1, endRow, endCol)]);
  //   }
  //   if (col + 1 < SIDE) {
  //     paths.push([...vertices, ...nextMove(row + 2, col + 1, endRow, endCol)]);
  //   }
  // }
  // if (row - 1 >= 0) {
  //   if (col - 2 >= 0) {
  //     paths.push([...vertices, ...nextMove(row - 1, col - 2, endRow, endCol)]);
  //   }
  //   if (col + 2 < SIDE) {
  //     paths.push([...vertices, ...nextMove(row - 1, col + 2, endRow, endCol)]);
  //   }
  // }
  // if (row + 1 < SIDE) {
  //   if (col - 2 >= 0) {
  //     paths.push([...vertices, ...nextMove(row + 1, col - 2, endRow, endCol)]);
  //   }
  //   if (col + 2 < SIDE) {
  //     paths.push([...vertices, ...nextMove(row + 1, col + 2, endRow, endCol)]);
  //   }
  // }
  // let shortestPath = paths[0];
  // for (let path of paths) {
  //   if (path.length < shortestPath.length) {
  //     shortestPath = path;
  //   }
  // }
  // vertices = [...vertices, ...shortestPath];
  // return vertices;

  const rowMove = [2, 2, -2, -2, 1, 1, -1, -1];
  const colMove = [-1, 1, -1, 1, 2, -2, 2, -2];
}
