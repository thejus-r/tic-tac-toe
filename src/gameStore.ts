import { create } from "zustand";
import type { TileType } from "./utils";

type State = {
  gameStatus: "ongoing" | "X wins" | "O Wins" | "Tie";
  currentPlayer: "X" | "O";
  board: TileType[];
};

type Actions = {
  updateGameStatus: (gameStatus: State["gameStatus"]) => void;
  updateBoard: (board: TileType[]) => void;
  switchPlayer: () => void;
  resetGame: () => void;
};

const initialState: State = {
  gameStatus: "ongoing",
  currentPlayer: "X",
  board: Array(9).fill(null),
};

const useGameStore = create<State & Actions>((set, get) => ({
  ...initialState,
  updateBoard: (board) => set(() => ({ board: board })),
  switchPlayer: () =>
    set((state) => ({
      currentPlayer: state.currentPlayer === "X" ? "O" : "X",
    })),
  updateGameStatus: (gameStatus) => set(() => ({ gameStatus: gameStatus })),
  resetGame: () => {
    set(initialState);
  },
}));

export default useGameStore;
