import { useState } from "react";
import useStateWithHistory, {
  UseStateWithHistoryResult,
} from "./useStateWithHistory";

export default function StateWithHistoryComponent() {
  const [
    count,
    setCount,
    { history, pointer, back, forward, go },
  ]: UseStateWithHistoryResult<number> = useStateWithHistory(1);
  const [name, setName] = useState<string>("Kyle");

  console.log(back)

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => setCount((prevCount) => prevCount * 2)}
      >
        Double
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={back}
      >
        Back
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={forward}
      >
        Forward
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => go(2)}
      >
        Go To Index 2
      </button>
      <button
        className=" bg-blue-700  rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => setName("John")}
      >
        Change Name
      </button>
    </div>
  );
}
