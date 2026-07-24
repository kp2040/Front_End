import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function GrandChild() {
  const { theme } = useContext(ThemeContext);

  return <h2>Theme from Context: {theme}</h2>;
}

export default GrandChild;