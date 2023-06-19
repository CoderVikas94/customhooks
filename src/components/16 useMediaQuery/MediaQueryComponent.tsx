import useMediaQuery from "./useMediaQuery";

interface MediaQueryOptions {
  mediaQuery: string;
}

export default function MediaQueryComponent() {
  const isLarge = useMediaQuery({ mediaQuery: "(min-width: 1000px)" } as MediaQueryOptions);

  return <div>Large: {isLarge.toString()}</div>;
}
