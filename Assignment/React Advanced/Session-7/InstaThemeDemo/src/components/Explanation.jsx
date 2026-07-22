import React from "react";

function Explanation() {
  return (
    <div
      style={{
        width: "70%",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Prop Drilling vs ThemeContext</h2>

      <p>
        Without <strong>ThemeContext</strong>, the <strong>theme</strong> state
        would have to be passed as a prop through multiple components such as
        <strong> App → Feed → PostList → PostCard</strong>, even if some of
        those components do not use it.
      </p>

      <p>
        This process is called <strong>prop drilling</strong>, and it makes the
        code more complex and harder to maintain.
      </p>

      <p>
        By using <strong>ThemeContext</strong>, any component can access the
        theme directly using <strong>useContext()</strong> without passing props
        through intermediate components.
      </p>

      <p>
        This keeps the application cleaner, easier to manage, and more
        scalable.
      </p>
    </div>
  );
}

export default Explanation;