import { useState } from 'react';
import './App.css'
import Btn from './component/Btn';
import BtnHand from './component/BtnHand';
import HandIcon from './component/HandIcon';
import { compareHand, generateRandomHand } from './utils/utils';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {

  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('rock');
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand('rock');
    setOtherHand('rock');
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    setBet(Number(e.target.value));
  };

  return (
    <>
      <Btn
        onClick={handleClearClick}
      >
        처음부터
      </Btn>

      <div>
        {score} : {otherScore}
      </div>
      
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>

      <div>
        <input 
          type="number" 
          value={bet} 
          min={1} 
          max={9}
          onChange={handleBetChange}
          ></input>
      </div>

      <p>
        승부 기록: {gameHistory.join(', ')}
      </p>

      <div>
        <BtnHand value="rock" onClick={handleClick} />
        <BtnHand value="scissor" onClick={handleClick} />
        <BtnHand value="paper" onClick={handleClick} />
      </div>

    </>
  )
}

export default App;
