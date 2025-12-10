"use client";

import PlayerCard  from "./playerCard";
import players from "../data/players";

export default function PlayersList() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: 20
    }}>
      {players.map((player, index) => (
        <PlayerCard key={index} {...player} />
      ))}
    </div>
  );
}
