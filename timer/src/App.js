
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [isActive,setActive] = useState(false);
  const [isPaused,setPaused] = useState(true);
  const [time,setTime] = useState(0);

  useEffect(() => {
    let intervalId = null;
    if(isActive && isPaused===false){
      intervalId = setInterval(() => {
        setTime((time) => time+1);
      },1000);
    }else{
      clearInterval(intervalId)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isActive,isPaused])

  const startTimer = () => {
    setActive(true);
    setPaused(false);
  };

  const stopTimer = () => {
    setPaused(true);
  };
  const resetTimer = () => {
    setActive(false);
    setTime(0);
  };

  return (
    <div className="App">
      <h1>Timer useEffect</h1>
      <div>{Math.trunc(time/60)} min {time%60} secs</div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
