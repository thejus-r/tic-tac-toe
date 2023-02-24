import type { Tile } from "./Board";

export default function Tile({
  value,
  handleClick,
  index,
}: {
  value: Tile;
  handleClick: any;
  index: number;
}) {
  return (
    <button
      disabled={value !== null}
      onClick={() => handleClick(index)}
      className="h-24 w-24  bg-stone-700 disabled:brightness-75  border-2 border-stone-600 hover:brightness-110 rounded-md"
    >
      {value}
    </button>
  );
}
