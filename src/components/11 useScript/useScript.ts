import useAsync from "../9 useAsync/useAsync";

export default function useScript(url: string) {
  return useAsync(() => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;

      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);

      document.body.appendChild(script);
    });
  }, [url]);
}
