import React, { useState, useRef } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const messageRef = useRef(null);

  const focusMessage = () => {
    messageRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nMessage: ${message}`);
  };

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Message:</label>
          <br />
          <textarea
            ref={messageRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </div>

        <br />

        <button type="button" onClick={focusMessage}>
          Focus Message
        </button>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;