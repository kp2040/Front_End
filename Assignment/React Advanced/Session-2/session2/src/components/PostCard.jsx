import React from "react";
import useLikeButton from "../hooks/useLikeButton";

function PostCard() {
  const { liked, likes, toggleLike } = useLikeButton(120);

  return (
    <div className="card">
      <img
        src="https://picsum.photos/300/200"
        alt="Post"
      />

      <h2>Beautiful Nature 🌿</h2>

      <p>{likes} Likes</p>

      <button onClick={toggleLike}>
        {liked ? "💔 Unlike" : "❤️ Like"}
      </button>
    </div>
  );
}

export default PostCard;