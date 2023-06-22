import { useState, RefObject } from "react";
import useEventListener from "../13 useEventlistener/useEventListener";

export default function useHover(ref: RefObject<HTMLElement>): boolean {
  const [hovered, setHovered] = useState(false);

  useEventListener({eventType:"mouseover", callback:() => setHovered(true), element:ref.current});
  useEventListener({eventType:"mouseout",callback: () => setHovered(false), element:ref.current});

  return hovered;
}
