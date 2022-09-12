const SIDE = 8;

// 8 possible movements for a knight
const rowMove = [2, 2, -2, -2, 1, 1, -1, -1];
const colMove = [-1, 1, -1, 1, 2, -2, 2, -2];

// Represent a cell as a node in a tree
// Distance: number of moves from src
function NodeFactory(row, col) {
  return { row, col };
}

function isValid(row, col) {
  return row >= 0 && row < SIDE && col >= 0 && col < SIDE;
}

// This returns the shortest path from src to dest using breadth-first search
function knightMoves(src, dest) {
  const queue = [];
  queue.push(src);

  let visited = [];

  while (queue.length > 0) {
    const node = queue.shift();
    visited.push(node);

    let row = node.row;
    let col = node.col;

    if (row === dest.row && col === dest.col) {
    }
  }
}
