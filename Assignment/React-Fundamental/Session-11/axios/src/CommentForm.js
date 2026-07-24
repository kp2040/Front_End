import React, { useState } from "react";
import axios from "axios";

function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          username: username,
          comment: comment,
        }
      );

      setResponseData(response.data);

      setUsername("");
      setComment("");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add Comment</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Comment:</label>
          <br />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Submit Comment
        </button>
      </form>

      {responseData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Response:</h3>
          <p><strong>ID:</strong> {responseData.id}</p>
          <p><strong>Username:</strong> {responseData.username}</p>
          <p><strong>Comment:</strong> {responseData.comment}</p>
        </div>
      )}
    </div>
  );
}

export default CommentForm;