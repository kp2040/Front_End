import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={theme === "dark" ? "dark" : "light"}
      style={{
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h1>📸 InstaThemeDemo</h1>

      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default Home;