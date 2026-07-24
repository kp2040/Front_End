import React, { useContext } from "react";
import NotificationContext from "./NotificationContext";

function NotificationDemo() {
  const { count, setCount } = useContext(NotificationContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📩 Unread Messages: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        New Message
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px" }}
      >
        Mark All Read
      </button>
    </div>
  );
}

export default NotificationDemo;