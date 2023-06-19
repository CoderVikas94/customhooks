import useScript from "./useScript";
import { useEffect } from "react";

export default function ScriptComponent() {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  );

  useEffect(() => {
    if (!loading && !error) {
      // Access jQuery functions using the imported jQuery object
      console.log(jQuery(window).width());
    }
  }, [loading, error]);

  if (loading) return <div>Loading</div>;
  return <div>{jQuery(window).width()}</div>;
}
