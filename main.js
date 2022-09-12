const SIDE = 8;

// 8 possible movements for a knight
const rowMove = [2, 2, -2, -2, 1, 1, -1, -1];
const colMove = [-1, 1, -1, 1, 2, -2, 2, -2];

// Represent a cell as a node in a tree
function NodeFactory(row, col) {
  return { row, col };
}

function isValid(row, col) {
  return row >= 0 && row < SIDE && col >= 0 && col < SIDE;
}

function findShortestPath(src, dest) {
  const queue = [];
  queue.push(src);

  let visited = [];

  while (queue.length > 0) {
    const node = queue.shift();

    let row = node.row;
    let col = node.col;

    if (row === dest.row && col === dest.col) {
      visited.push(node);
      return visited;
    }

    if (visited.findIndex(node) === -1) {
      visited.push(node);
    }

    // Check all 8 possible moves
  }
}
