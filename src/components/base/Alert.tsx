import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function Alert({ children }: { children: ReactNode }) {
  return createPortal(<>{children}</>, document.body);
}

function Overlay({ children }: { children: ReactNode }) {
  return (
    <div className="absolute flex flex-col justify-center items-center w-screen min-h-screen top-0 bottom-0 bg-black/70 backdrop-blur-md">
      {children}
    </div>
  );
}

function Content({ setOpen }: { setOpen: (state: boolean) => void }) {
  let title = "You win!";
  return (
    <div className="bg-stone-900 flex flex-col justify-center gap-4 w-72 xl:w-1/6 px-6 py-4 border-2 rounded-lg border-stone-800 text-white">
      <div className="flex flex-col gap-1">
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-base text-stone-500">Click restart to play again</p>
      </div>
      <button
        onClick={() => setOpen(false)}
        className="flex bg-red-900 px-3 rounded-md border-red-700 border-2 py-2 justify-center items-center gap-2"
      >
        <ArrowPathIcon className="h-4 w-4 stroke-2" />
        Restart
      </button>
    </div>
  );
}

Alert.Overlay = Overlay;
Alert.Content = Content;
export default Alert;
