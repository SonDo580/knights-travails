const SIDE = 8;

const rowMove = [2, 2, -2, -2, 1, 1, -1, -1];
const colMove = [-1, 1, -1, 1, 2, -2, 2, -2];

function knightMoves(src, dest) {}

function NodeFactory(row, col, distance = 0) {
  return { row, col, distance };
}

function isValid(row, col) {
  return row >= 0 && row < SIDE && col >= 0 && col < SIDE;
}
