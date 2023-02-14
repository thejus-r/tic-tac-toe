"use client";

import { useState } from "react";

export default function GamePage() {
  const [board, setBoard] = useState(Array(9).fill("x"));
  return (
    <div className="grid grid-cols-3">
      {board.map((tile, index) => {
        return <div key={index}>{tile}</div>;
      })}
    </div>
  );
}
