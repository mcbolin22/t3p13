
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello World");
  const [state2, setState2] = useState("e");

  // useEffect with empty dependency array []
  // depends on nothingm will run when declared
  // but never again.
  useEffect(() => {
    console.log("Component Loaded")
  }, []);

  // useEffect with return function =
  // calls the function on componentWillUnmount
  // but not on anything listed in the dependency array []
  useEffect(() => {
    return (() => {
      console.log("Component will unmount");
    });
  }, []);

  // useEffect with variable in dependency array =
  // depends on variable, will run when declared AND updated
  // but not on anything not listed in dependancy array
  useEffect(() => {
    console.log("Message updated, new value is: " + message)
  }, [message]);


  
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
