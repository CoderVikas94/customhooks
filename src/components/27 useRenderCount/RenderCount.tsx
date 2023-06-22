import useRenderCount from "./useRenderCount";
import useToggle from "../1 useToggle/useToggle";

export default function RenderCountComponent() {
  const [boolean, toggle]:any = useToggle(false);

  const renderCount = useRenderCount();

  return (
     <div>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
