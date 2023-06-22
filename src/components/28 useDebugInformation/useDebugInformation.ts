import { useEffect, useRef } from "react";
import useRenderCount from "../27 useRenderCount/useRenderCount";

interface DebugInformation<TProps extends object> {
  count: number;
  changedProps: { [key: string]: { previous: any; current: any } };
  timeSinceLastRender: number;
  lastRenderTimestamp: number;
}

export default function useDebugInformation<TProps extends object>(
  componentName: string,
  props: TProps
): DebugInformation<TProps> {
  const count = useRenderCount();
  const changedProps = useRef<{ [key: string]: { previous: any; current: any } }>({});
  const previousProps :any= useRef<TProps>(props);
  const lastRenderTimestamp = useRef(Date.now());

  const propKeys = Object.keys({ ...props, ...previousProps.current });
  changedProps.current = propKeys.reduce<{ [key: string]: { previous: any; current: any } }>(
    (obj, key:any) => {
      if (propKeys[key] === previousProps.current[key]) return obj;
      return {
        ...obj,
        [key]: { previous: previousProps.current[key], current: propKeys[key] },
      };
    },
    {} as { [key: string]: { previous: any; current: any } }
  );
  const info: DebugInformation<TProps> = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current,
  };

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();
    console.log("[debug-info]", componentName, info);
  });

  return info;
}
