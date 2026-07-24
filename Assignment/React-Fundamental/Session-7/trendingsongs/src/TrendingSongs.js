import React, { useEffect } from "react";

function TrendingSongs() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h1>Trending Songs</h1>
    </div>
  );
}

export default TrendingSongs;