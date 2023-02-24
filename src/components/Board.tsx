import { useState } from "react";
import Tile from "./Tile";

export type Tile = "X" | "O" | null;

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

function checkWinner(board: Tile[]) {
  winConditions.map(([a, b, c]) => {
    if (
      board[a] &&
      board[a] === board[b] &&
      board[b] === board[c] &&
      board[c]
    ) {
      console.log("Winner is:", board[a]);
      return;
    }
    return null;
  });
}

export default function Board() {
  const [board, setBoard] = useState<Tile[]>(Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = useState<Tile>("X");

  function resetBoard() {
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
  }

  function handleClick(index: number): void {
    if (board[index] === null) {
      let updatedBoard = board;
      updatedBoard[index] = currPlayer;
      setBoard(updatedBoard);
      setCurrPlayer((c) => (c == "X" ? "O" : "X"));
      console.log(board);
    }
  }
  checkWinner(board);
  return (
    <>
      <div className="bg-stone-800 p-4 rounded-lg border-2 border-stone-700 grid grid-cols-3 gap-4">
        {board.map((tile, index) => (
          <Tile
            value={tile}
            index={index}
            handleClick={handleClick}
            key={index}
          />
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={resetBoard}
          className="bg-red-500 text-md rounded-md p-4 py-1.5"
        >
          Reset
        </button>
      </div>
    </>
  );
}
