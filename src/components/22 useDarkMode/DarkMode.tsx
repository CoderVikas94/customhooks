import useDarkMode from "./useDarkMode";
import "../../index.css";

export default function DarkModeComponent() {
  const { enabled: darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        border: `1px solid ${darkMode ? "white" : "black"}`,
        background: "none",
        color: darkMode ? "white" : "black",
      }}
    >
      Toggle Dark Mode
    </button>
  );
}
