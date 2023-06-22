import { useEffect } from "react";

interface EffectCallback {
  (): void | (() => void | undefined);
}

export default function useEffectOnce(cb: EffectCallback) {
  useEffect(cb, []);
}
