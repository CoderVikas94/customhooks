import { useEffect, useRef } from "react";

interface UseEventListenerProps<EventT extends Event> {
  eventType: string;
  callback: (event: EventT) => void;
  element?: EventTarget | null;
}

const useEventListener = <EventT extends Event>({
  eventType,
  callback,
  element = window
}: UseEventListenerProps<EventT>) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element === null) return;
    const handler = (e: Event) => callbackRef.current(e as EventT);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

export default useEventListener;
