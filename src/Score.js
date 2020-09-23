import React from "react";

const Score = ({ scores }) =>
  scores.map((player) => (
    <p>
      {player.n} - {player.s}
    </p>
  ));
  
export default Score;