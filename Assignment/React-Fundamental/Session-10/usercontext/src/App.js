import React, { useState } from "react";
import Navbar from "./Navbar";
import Parent from "./Parent";
import NotificationDemo from "./NotificationDemo";

import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";
import NotificationContext from "./NotificationContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(5);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <UserContext.Provider value={{ username: "Krish" }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NotificationContext.Provider value={{ count, setCount }}>
          <div
            style={{
              backgroundColor: theme === "light" ? "white" : "black",
              color: theme === "light" ? "black" : "white",
              height: "100vh",
              textAlign: "center",
              paddingTop: "50px",
            }}
          >
            <Navbar />

            <h1>Current Theme: {theme}</h1>

            <button onClick={toggleTheme}>
              Toggle Theme
            </button>

            <hr />

            <NotificationDemo />

            <hr />

            <Parent />
          </div>
        </NotificationContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;