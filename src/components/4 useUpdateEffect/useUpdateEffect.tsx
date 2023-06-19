import { useEffect, useRef, DependencyList } from "react";

type Callback = () => void;

export default function useUpdateEffect(callback: Callback, dependencies: DependencyList) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      return callback();
    }
  }, dependencies);
}
