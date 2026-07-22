import React, { useState } from "react";

function LikeCounter() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <h2>📷 Instagram Post</h2>

      <img
        src="https://picsum.photos/300/200"
        alt="Post"
      />

      <h3>❤️ {likes} Likes</h3>

      <button onClick={handleLike}>
        Like ❤️
      </button>
    </div>
  );
}

export default LikeCounter;