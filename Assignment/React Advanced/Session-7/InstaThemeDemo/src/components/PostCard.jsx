import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function PostCard({ post }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        border: "1px solid gray",
        padding: "20px",
        margin: "15px 0",
        borderRadius: "8px",
      }}
    >
      <h3>@{post.username}</h3>
      <p>{post.caption}</p>
    </div>
  );
}

export default PostCard;