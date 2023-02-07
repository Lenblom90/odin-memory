import HeaderBar from "./components/HeaderBar";
import CardLayout from "./components/CardLayout";
import { useState } from "react";
import './styles/App.css';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  }

  const updateScore = () => {
    setScore(score + 1);
    if(score >= bestScore){
      setBestScore(bestScore + 1);
    }
  }

  return (
    <div className="App">
      <HeaderBar score={score} bestScore={bestScore} />
      <CardLayout updateScore={updateScore} resetScore={resetScore}/>
    </div>
  );
}