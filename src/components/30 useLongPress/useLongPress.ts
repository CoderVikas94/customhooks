import useEventListener from "../13 useEventlistener/useEventListener";
import useTimeout from "../2 useTimeout/useTimeout";
import useEffectOnce from "../20 useEffectOnce/useEffectOnce";
import { RefObject } from "react";

type LongPressOptions = {
  delay?: number;
};

export default function useLongPress(
  ref: RefObject<any>,
  cb: () => void,
  { delay = 250 }: LongPressOptions = {}
) {
  const { reset, clear } = useTimeout(cb, delay);
  useEffectOnce(clear);

  useEventListener({eventType:"mousedown",callback: reset,element: ref.current});
  useEventListener({eventType:"touchstart",callback: reset,element: ref.current});

  useEventListener({eventType:"mouseup",callback: clear,element: ref.current});
  useEventListener({eventType:"mouseleave",callback: clear, element:ref.current});
  useEventListener({eventType:"touchend",callback: clear,element: ref.current});
}
