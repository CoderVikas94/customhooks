import { useEffect, useState, useRef } from "react";
import useDeepCompareEffect from "./useDeepCompare";

export default function DeepCompareEffectComponent() {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectCountRef = useRef<HTMLSpanElement>(null);
  const useDeepCompareEffectCountRef = useRef<HTMLSpanElement>(null);

  const person = { age: age, name: "Kyle" };

  useEffect(() => {
    if (useEffectCountRef.current) {
      useEffectCountRef.current.textContent = String(
        parseInt(useEffectCountRef.current.textContent || "") + 1
      );
    }
  }, [person]);

  useDeepCompareEffect(() => {
    if (useDeepCompareEffectCountRef.current) {
      useDeepCompareEffectCountRef.current.textContent = String(
        parseInt(useDeepCompareEffectCountRef.current.textContent || "") + 1
      );
    }
  }, [person]);

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button
        className=" bg-blue-700 p-2 rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => setAge((currentAge) => currentAge + 1)}
      >
        Increment Age
      </button>
      <button
        className=" bg-blue-700 p-2 rounded-md w-max h-10 text-yellow-200 font-bold border-s-blue-950 border-slate-50 mx-4"
        onClick={() => setOtherCount((count) => count + 1)}
      >
        Increment Other Count
      </button>
    </div>
  );
}
