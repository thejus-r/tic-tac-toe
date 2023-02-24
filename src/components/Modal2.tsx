import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function ModalContainer() {
  return createPortal(
    <Backdrop>
      <Modal />
    </Backdrop>,
    document.getElementById("portal")!
  );
}

function Modal() {
  return (
    <div className="bg-stone-800 border-2 border-stone-700 rounded-lg w-1/4 gap-4 shadow-black shadow-2xl  flex flex-col justify-between text-white min-h-40 p-4">
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-medium">Alert</h4>
        <p className="text-stone-300">
          Resetting the board, will cause to loose the game progress
        </p>
      </div>
      {/* <hr className="border-stone-700" /> */}
      <div className="self-end flex gap-3">
        <button className="p-1 w-20 rounded-md px-4 bg-stone-700 border-2 border-stone-700">
          Cancel
        </button>
        <button className="p-1 w-20 rounded-md px-4  bg-red-900 text-white  border-2 border-red-700">
          Reset
        </button>
      </div>
    </div>
  );
}

function Backdrop({ children }: { children: ReactNode }) {
  return (
    <div className=" absolute top-0 left-0 h-screen w-full bg-black/50 flex justify-center items-center">
      {children}
    </div>
  );
}
