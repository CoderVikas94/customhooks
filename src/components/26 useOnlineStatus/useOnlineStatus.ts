import { useState } from "react";
import useEventListener from "../13 useEventlistener/useEventListener";

export default function useOnlineStatus(): boolean {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEventListener({eventType:"online",callback: () => setOnline(navigator.onLine)});
  useEventListener({eventType:"offline", callback:() => setOnline(navigator.onLine)});

  return online;
}
