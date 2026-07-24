import React, { useState } from "react";

function RatingSelector() {
  const [rating, setRating] = useState(0);

  return (
    <div
      style={{
        textAlign: "start",
        padding: "10px",
      }}
    >
    
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "lightgray",
          }}
        >
          ★
        </span>
      ))}

      <p>Your Rating: {rating} / 5</p>
    </div>
  );
}

export default RatingSelector;