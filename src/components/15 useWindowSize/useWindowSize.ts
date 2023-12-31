import { useState } from "react";
import useEventListener from "../13 useEventlistener/useEventListener";

export interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener({
    eventType:"resize", 
    callback:() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }});

  return windowSize;
};

export default useWindowSize;
