import type { TileType } from "../utils";
import Circle from "./Circle";
import Cross from "./Cross";

export default function Tile({
  value,
  handleClick,
  index,
}: {
  value: TileType;
  handleClick: any;
  index: number;
}) {
  return (
    <button
      onClick={() => handleClick(index)}
      className="h-24 w-24 p-4  bg-stone-700 disabled:brightness-75  border-2 border-stone-600 hover:brightness-110 rounded-md"
    >
      {value !== null && value === "X" ? (
        <Cross />
      ) : value === "O" ? (
        <Circle />
      ) : (
        ""
      )}
    </button>
  );
}
