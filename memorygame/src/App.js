import React, { useState } from "react";
import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArray, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  const handleHighScore = () => {
    setHighScore(score);
  }

  const handleCard = (cardId) => {
    addCard((prevArray) => [...prevArray, cardId]);
  };

  const reset = () => {
    setScore(0);
    addCard([]);
  }

  const handleGameLogic = (cardId) => {
    if (!cardsArray.includes(cardId)) {
      handleCard(cardId);
      handleScore();
    } else {
      handleHighScore();
      reset()
    }
  };

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <div className="card-container">
        <CardContainer
          handleGameLogic={handleGameLogic}
          score={score}
          highScore={highScore}
        />
      </div>
    </div>
  );
};

export default App;