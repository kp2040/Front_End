import React from "react";
import TrendingSongs from "./TrendingSongs";
import IPLScoreFetcher from "./IPLScoreFetcher";
import MovieSuggestions from "./MovieSuggestions";
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <div>
      <TrendingSongs />

       <IPLScoreFetcher />

        <MovieSuggestions />

          <DataFetcher />
    </div>
  );
}

export default App;