import { useState, useEffect } from "react";
import useEventListener from "../13 useEventlistener/useEventListener";

interface MediaQueryOptions {
  mediaQuery: string;
}

export default function useMediaQuery({ mediaQuery }: MediaQueryOptions) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener({
    eventType: "change",
    callback: (e: MediaQueryListEvent) => setIsMatch(e.matches),
    element: mediaQueryList,
  });

  return isMatch;
}
