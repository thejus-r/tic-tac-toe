import Tile from "../Tile"

type Board = null | "X" | "O"

export default function Board({ board, handleMove }: { board: Board[], handleMove: any }) {
    return <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => {
            return <Tile key={index} value={value} index={index} handleMove={handleMove} />
        })}
    </div>
}