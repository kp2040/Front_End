import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { dispatch } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_THEME" })
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;