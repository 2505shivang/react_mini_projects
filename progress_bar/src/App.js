import './App.css';
import { useState } from 'react';

function App() {

  const [progress,setProgress] = useState(0);

  const handleChange = (val) => {
    setProgress(val);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Progress bar</h2>
        <div className='progress'>
          <div className='bar' style={{width:`${progress}%`}}>{progress}</div>
        </div>
        <div>
          <span>Input Percentage: </span>
          <input type="number" min="0" max="100" onChange={(e) => {handleChange(e.target.value)}} value={progress} />
        </div>
      </header>
    </div>
  );
}

export default App;
