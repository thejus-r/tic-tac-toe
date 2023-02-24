import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function ModalContainer(props) {
  return props.isOpen
    ? createPortal(
        <Backdrop>
          <Modal setIsOpen={props.setIsOpen} />
        </Backdrop>,
        document.getElementById("portal")!
      )
    : null;
}

function Modal(props) {
  return (
    <div className="bg-stone-800 border-2 border-stone-700 rounded-lg w-1/4 gap-4 shadow-black shadow-2xl  flex flex-col justify-between text-white min-h-40 p-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between w-full">
          <h4 className="text-lg font-medium">Alert</h4>
          <button
            onClick={() => props.setIsOpen(false)}
            className="w-6 h-6 rounded-full flex justify-center items-center font-bold bg-stone-700"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
        <p className="text-stone-300">
          Resetting the board, will cause to loose the game progress
        </p>
      </div>
      {/* <hr className="border-stone-700" /> */}
      <div className="self-end flex gap-3">
        <button className="p-1 w-20 rounded-md px-4 bg-stone-700 ">
          Cancel
        </button>
        <button className="p-1 w-20 rounded-md px-4  bg-red-900 text-white  border-2 border-red-800">
          Reset
        </button>
      </div>
    </div>
  );
}

function Backdrop({ children }: { children: ReactNode }) {
  return (
    <div className=" absolute top-0 left-0 h-screen w-full backdrop-blur-md bg-black/50 flex justify-center items-center">
      {children}
    </div>
  );
}
