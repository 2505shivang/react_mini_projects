
import './App.css';
import { useState } from 'react';

function App() {
  const [lists,setLists] = useState(Array(0));
  const [task,setTask] = useState("");

  const handleAdd = () => {
      setLists((lists) => [...lists,task]);
      setTask("");
  }

  const handleCancel = (idx) => {
    setLists((lists) => {
      let newList = [...lists];
      newList = newList.filter((val,i) => {
          return i!==idx;
      })
      return newList;
    })
  }

  return (
    <div className="App">
      <div>ToDo List:</div>
      <input onChange={(e) => setTask(e.target.value)} placeholder='Add here' value={task}/>
      <button onClick={handleAdd}>Add</button>
      {lists.map((val,idx) => {
        return (
        <div>
          <li key={idx}>{val}</li>
          <button onClick={() => handleCancel(idx)}>X</button>
        </div>)
      })}
    </div>
  );
}

export default App;
