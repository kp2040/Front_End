import React, { useEffect, useState } from "react";

function IPLScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (response.status !== 200) {
          throw new Error("Failed to load scores");
        }

        const data = await response.json();
        setScores(data);
      } catch (err) {
        setError(true);
      }
    };

    fetchScores();
  }, []);

  if (error) {
    return <h2>Error loading scores</h2>;
  }

  return (
    <div>
      <h2>IPL Scores</h2>

      <ul>
        {scores.slice(0, 5).map((team) => (
          <li key={team.id}>
            {team.name} - {Math.floor(Math.random() * 200) + 50}/
            {Math.floor(Math.random() * 10)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IPLScores;