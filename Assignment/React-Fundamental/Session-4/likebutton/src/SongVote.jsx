import React, { useState } from "react";

function SongVote() {
  const [votes, setVotes] = useState(0);

  const upVote = () => {
    setVotes(votes + 1);
  };

  const downVote = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        textAlign: "center",
      }}
    >
      <h3>Balenci</h3>
      <p>Current Votes: {votes}</p>

      <button onClick={upVote} style={{ marginRight: "10px" }}>
        ⬆ Upvote
      </button>

      <button onClick={downVote}>
        ⬇ Downvote
      </button>
    </div>
  );
}

export default SongVote;