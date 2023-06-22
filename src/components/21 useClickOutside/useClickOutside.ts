import { RefObject } from "react";
import useEventListener from "../13 useEventlistener/useEventListener";

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  cb: (event: MouseEvent) => void
): void {
  useEventListener({
    eventType: "click",
    callback: (e: MouseEvent) => {
      if (ref.current == null || ref.current.contains(e.target as Node)) return;
      else {
        cb(e);
      }
    },
    element: document,
  });
}
