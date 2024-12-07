import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("mayur", counter);
    if(counter < 20){
      setCounter(counter + 1);
    } else {
      console.log("can't update more");
    }
    
  };
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    } else {
      console.log("can't update more");
    }
  };

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
