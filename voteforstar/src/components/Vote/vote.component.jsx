import React from "react";
import "./vote.scss";

const Vote = () => {
  const games = [
    // Example games
    { id: 1, name: "Game 1", image: "game1.jpg" },
    { id: 2, name: "Game 2", image: "game2.jpg" }
  ];

  const handleVote = (gameId) => {
    // Add vote functionality
  };

  return (
    <div className="vote-container">
      <div className="jumbotron">
        <h1>Game Voting Contest</h1>
        <p>Vote for your favorite game!</p>
      </div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <img src={game.image} alt={game.name} />
            <h2>{game.name}</h2>
            <button onClick={() => handleVote(game.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vote;
