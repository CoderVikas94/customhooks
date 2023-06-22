import { useState, useCallback } from "react";
import Cookies from "js-cookie";

interface CookieOptions {
  [key: string]: any;
}

type CookieSetter = (newValue: string, options?: CookieOptions) => void;
type CookieDeleter = () => void;

export default function useCookie(
  name: string,
  defaultValue: string
): [string, CookieSetter, CookieDeleter] {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCookie: CookieSetter = useCallback(
    (newValue, options) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie: CookieDeleter = useCallback(() => {
    Cookies.remove(name);
    setValue("");
  }, [name]);

  return [value, updateCookie, deleteCookie];
}
