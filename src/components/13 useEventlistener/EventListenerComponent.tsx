import { useState } from "react";
import useEventListener from "./useEventListener";

const EventListenerComponent = () => {
  const [key, setKey] = useState<string>("");

  useEventListener({
    eventType: "keyup",
    callback: (e: KeyboardEvent) => {
      setKey(e.key);
    }
  });

  return <div>Last Key: {key}</div>;
};

export default EventListenerComponent;