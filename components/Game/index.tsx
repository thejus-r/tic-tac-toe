import { useState } from "react"
import Board from "../Board"

type BoardType = null | "X" | "O"
type PlayerType = "X" | "O"

export default function Game() {

    const [gameStatus, setGameStatus] = useState("ongoing")
    const [currPlayer, setCurrPlayer] = useState<PlayerType>("X")
    const [board, setBoard] = useState<BoardType[]>(Array(9).fill(null))

    function resetBoard() {
        const newBoard = Array(9).fill(null)
        setBoard(newBoard)
        setCurrPlayer("X")
    }

    function handleMove(index: number): void {
        const updatedBoard = [...board];
        updatedBoard[index] = currPlayer
        setBoard(updatedBoard)
        currPlayer === "X" ? setCurrPlayer("O") : setCurrPlayer("X")
    }

    function checkWinner(board: BoardType[]) {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        winConditions.map(([a, b, c]) => {
            if (board[a] && board[a] === board[b] && board[b] === board[c] && board[c]) {
                console.log("Winner is:", board[a])
                return
            }
            return null
        })
    }
    checkWinner(board)
    return <div className="flex flex-col space-y-4">
        <Board board={board} handleMove={handleMove} />
        <div className="flex justify-between items-center">
            <div className="text-xl">X Wins the game!</div>
            <button onClick={() => resetBoard()} className="bg-red-700 px-3 py-2 rounded-lg">Reset</button>
        </div>
    </div>
}