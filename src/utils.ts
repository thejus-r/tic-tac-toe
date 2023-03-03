export type TileType = "X" | "O" | null;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [3, 4, 6],
];

export function availableTiles(board: TileType[]) {
  let tiles: number[] = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) tiles.push(i);
  }
  return tiles;
}

export function checkWinner(board: TileType[]): string | null {
  let winner = null;
  winConditions.map(([a, b, c]) => {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[b] === board[c] &&
      board[c]
    ) {
      winner = board[a];
    }
  });
  if (availableTiles(board).length === 0) {
    return "tie";
  }
  return winner;
}
