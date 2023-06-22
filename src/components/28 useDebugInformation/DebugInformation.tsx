import useDebugInformation from "./useDebugInformation";
import useToggle from "../1 useToggle/useToggle";
import { useState } from "react";

interface ChildComponentProps {
  boolean: boolean;
  count: number;
}

export default function DebugInformationComponent() {
  const [boolean, toggle]:any = useToggle(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildComponent boolean={boolean} count={count} />
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </>
  );
}

function ChildComponent(props: ChildComponentProps) {
  const info = useDebugInformation<ChildComponentProps>("ChildComponent", props);

  return (
    <>
      <div>{props.boolean.toString()}</div>
      <div>{props.count}</div>
      <div>{JSON.stringify(info, null, 2)}</div>
    </>
  );
}
