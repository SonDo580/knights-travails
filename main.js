const SIDE = 8;

// 8 possible movements for a knight
const rowMove = [2, 2, -2, -2, 1, 1, -1, -1];
const colMove = [-1, 1, -1, 1, 2, -2, 2, -2];

// Represent a cell as a node in a tree
function NodeFactory(row, col, prev = null) {
  return { row, col, prev };
}

function isValid(row, col) {
  return row >= 0 && row < SIDE && col >= 0 && col < SIDE;
}

function findShortestPath(src, dest) {
  const queue = [];
  queue.push(src);

  const visited = [];

  while (queue.length > 0) {
    const node = queue.shift();

    let row = node.row;
    let col = node.col;

    if (row === dest.row && col === dest.col) {
      visited.push(node);
      return backTracking(visited, node);
    }

    if (visited.indexOf(node) === -1) {
      visited.push(node);

      // Check all 8 possible moves
      for (let i = 1; i <= 8; i++) {
        let nextRow = row + rowMove[i];
        let nextCol = col + colMove[i];

        if (isValid(nextRow, nextCol)) {
          const nextNode = NodeFactory(nextRow, nextCol, node);
          queue.push(nextNode);
        }
      }
    }
  }

  return null; // If the path is not possible
}

// Show the path from destination to source
function backTracking(visited, dest) {
  if (visited.length === 1) {
    return visited;
  }

  const path = [];
  path.push(dest);

  let prev = dest.prev;
  for (let i = visited.length - 1; i >= 0; i--) {
    if (visited[i] === prev) {
      path.push(visited[i]);
      prev = visited[i].prev;
    }
  }

  return path.reverse();
}

const src = NodeFactory(0, 0);
const dest = NodeFactory(1, 2);

console.log(findShortestPath(src, dest));
