import { useState } from "react";
import usePrevious from "./usePrevious";

export default function PreviousComponent() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Kyle");
  const previousCount = usePrevious<number>(count);

  return (
    <div>
      <div className="">
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button 
              className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"

      onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button
              className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"

       onClick={() => setName("Vikas")}>Change Name</button>
    </div>
  );
}
