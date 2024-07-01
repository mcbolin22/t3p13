
import React, {useState} from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello World");
  const [state2, setState2] = useState("e");


  
  return (
    <div className="App">
      <h1>{message}</h1>
      {/* <h1>{state}{state2}</h1> */}
      <button onClick={() => setMessage(69)}>
        Change Message
      </button>

      <input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />
    </div>
  );
  
}

export default App;
