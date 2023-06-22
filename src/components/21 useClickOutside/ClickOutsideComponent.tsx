import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

export default function ClickOutsideComponent() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLButtonElement>(null);
  console.log("open",open)
  useClickOutside(modalRef, () => {
    if (open) setOpen(false);
  });

  return (
    <div className="relative w-[100%] h-[300px] bg-slate-400">
      <button ref={modalRef} className='bg-black text-white' onClick={() => setOpen(!open)}>Open</button>
      <div
        
        className="divclick"
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% -100px)",
          left: "calc(50%-100px)",
        }}
      >
        <span>Modal</span>
      </div>
    </div>
  );
}
