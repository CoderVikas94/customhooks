import { useState } from "react";
import useEffectOnce from "./useEffectOnce";

export default function EffectOnceComponent(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffectOnce(() => alert("Hi"));

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c: number) => c + 1)}>Increment</button>
    </>
  );
}
