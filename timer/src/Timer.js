
import { useRef, useState } from 'react';
import './App.css';

function Timer() {

  const [time,setTime] = useState(0);
  const intervalId = useRef(null);
    
  const startTimer = () => {
        intervalId.current = setInterval(() => {
            setTime((time) => time+1);
        },1000);
  };

  const stopTimer = () => {
        clearInterval(intervalId.current);
  };

  const resetTimer = () => {
        clearInterval(intervalId.current);
        setTime(0);
  };

  return (
    <div className="App">
      <h1>Timer UseRef</h1>
      <div>{Math.trunc(time/60)} min {time%60} secs</div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
