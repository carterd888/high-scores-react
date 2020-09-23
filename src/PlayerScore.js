import React from "react";
import Score from "./Score.js";

const PlayerScore = ({data}) => (
  data.map((country) => (
    <div>
    <h2>{country.name}</h2>
   <Score scores={country.scores}/>
   </div>
  )    
  ))

export default PlayerScore