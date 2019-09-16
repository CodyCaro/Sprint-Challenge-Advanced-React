import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

function FetchPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(function(response) {
        // handle success
        console.log(response.data);
        setPlayers(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      {players.map(player => {
        return (
          <PlayerCard
            name={player.name}
            country={player.country}
            searches={player.searches}
            key={player.id}
          />
        );
      })}
    </div>
  );
}

export default FetchPlayers;
