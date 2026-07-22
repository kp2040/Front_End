import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function LikeButton() {
  const user = useContext(UserContext);

  return (
    <div>
      <button>❤️ Like</button>

      <h3>Liked by:</h3>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  );
}

export default LikeButton;