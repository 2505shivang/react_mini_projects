
import { useState } from 'react';
import './App.css';

function App() {

  const [show,setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show? <div>Welcome to React Challenges</div>:<></>}
    </div>
  );
}

export default App;
