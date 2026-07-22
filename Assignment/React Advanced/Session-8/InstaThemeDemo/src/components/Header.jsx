import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  const theme = themeContext?.theme || "light";
  const state = authContext?.state || {
    isLoggedIn: false,
    user: null,
  };

  return (
    <header
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#4CAF50",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Instagram Clone</h1>

      <h2>Current Theme: {theme}</h2>

      {state.isLoggedIn ? (
        <h3>Welcome, {state.user.displayName}</h3>
      ) : (
        <h3>Please Login</h3>
      )}
    </header>
  );
}

export default Header;