import useWindowSize, { WindowSize } from "./useWindowSize";

const WindowSizeComponent = () => {
  const { width, height }: WindowSize = useWindowSize();

  return (
    <div>
      {width} x {height}
    </div>
  );
};

export default WindowSizeComponent;
