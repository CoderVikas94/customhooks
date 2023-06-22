import { useRef } from "react";
import useSize from "./useSize";

export default function SizeComponent() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const size = useSize(ref);

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div>{JSON.stringify(size)}</div>
      <textarea className="w-28 border-2 border-red-500 resize" ref={ref}></textarea>
    </div>
  );
}
