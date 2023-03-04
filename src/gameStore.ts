import { create } from "zustand";
import type { TileType } from "./utils";

type State = {
  gameStatus: "ongoing" | "X wins" | "O Wins" | "Tie";
  currentPlayer: "X" | "O";
  board: TileType[];
};

type Actions = {
  updateGameStatus: (gameStatus: State["gameStatus"]) => void;
  updateBoard: (index: number) => void;
  resetGame: () => void;
};

const initialState: State = {
  gameStatus: "ongoing",
  currentPlayer: "X",
  board: Array(9).fill(null),
};

const useGameStore = create<State & Actions>((set, get) => ({
  // sets an initial state for the game
  ...initialState,
  updateBoard: (index) => {
    let updatedBoard = get().board;
    updatedBoard[index] = get().currentPlayer;
    set((state) => ({
      board: updatedBoard,
      currentPlayer: state.currentPlayer === "X" ? "O" : "X",
    }));
  },
  updateGameStatus: (gameStatus) => set(() => ({ gameStatus: gameStatus })),
  resetGame: () => {
    let board = Array(9).fill(null);
    set(() => ({
      ...initialState,
      board: board,
    }));
  },
}));

export default useGameStore;
