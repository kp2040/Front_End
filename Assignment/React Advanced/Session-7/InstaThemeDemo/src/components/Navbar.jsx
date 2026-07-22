import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#4CAF50",
        color: "#fff",
        padding: "15px",
      }}
    >
      <h2>📸 InstaThemeDemo</h2>
      <ToggleThemeButton />
    </nav>
  );
}

export default Navbar;