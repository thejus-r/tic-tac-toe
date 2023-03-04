import { useEffect, useState } from "react";
import Alert from "./Alert";
import Tile from "./Tile";
import { checkWinner, availableTiles } from "../utils";
import type { TileType } from "../utils";
import useGameStore from "../gameStore";

export default function Board() {
  const resetGame = useGameStore((state) => state.resetGame);
  const [showAlert, setShowAlert] = useState(false);
  const { gameStatus, currentPlayer, board, updateBoard, updateGameStatus } =
    useGameStore();

  useEffect(() => {
    switch (checkWinner(board)) {
      case "X":
        updateGameStatus("X wins");
        break;
      case "O":
        updateGameStatus("O Wins");
        break;
      case "tie":
        updateGameStatus("Tie");
        break;
      default:
        break;
    }
  }, [currentPlayer]);

  function handleClick(index: number): void {
    if (board[index] === null) {
      updateBoard(index);
    }
  }

  console.log(gameStatus);
  return (
    <>
      {gameStatus !== "ongoing" && <Alert context={gameStatus} />}
      <div className="bg-stone-800 p-4 rounded-lg border-2 border-stone-700 grid grid-cols-3 gap-4">
        {board.map((tile, index) => (
          <Tile
            value={tile}
            index={index}
            handleClick={handleClick}
            key={index}
          />
        ))}
        <button onClick={() => resetGame()}>Reset</button>
      </div>
    </>
  );
}
