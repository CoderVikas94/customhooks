import { useEffect } from "react";
import useMediaQuery from "../16 useMediaQuery/useMediaQuery";
import { useLocalStorage } from "../8 useStorage/useStorage";

interface DarkModeHook {
  enabled: boolean;
  setDarkMode: (enabled: boolean) => void;
}

export default function useDarkMode(): DarkModeHook {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode",true);
  const prefersDarkMode = useMediaQuery({mediaQuery:"(prefers-color-scheme: dark)"});
  const enabled: boolean = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return { enabled, setDarkMode };
}
