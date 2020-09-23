import React from "react";
import PlayerScore from "./PlayerScore.js";
import allCountryScores from "./scores.js";

const createTable = () => {
  return (
    <div>
    <h1>High Scores per Country</h1>
     <PlayerScore data={allCountryScores} />
    </div>
  );
};

export default createTable;
