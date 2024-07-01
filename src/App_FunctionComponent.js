
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("Hello World");
  const [pokemon, setPokemon] = useState({name: "", sprites: ""});

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

  const getPokemon = async () => {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 389) + 1}`).then(response => response.json());
    setPokemon({name: result.name, sprites: result.sprites.other.showdown.front_default});
  }

  useEffect(() => {
    getPokemon();
  }, []);
  
  return (
    <div className="App">
      <h1>{message}</h1>
      {/* <h1>{state}{state2}</h1> */}
      <button onClick={() => setMessage(69)}>
        Change Message
      </button>

      <input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />

      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites} alt='URL to the sprite of the Pokemon' />
      <button onClick={getPokemon}>
        Get a random Pokemon
      </button>
    </div>
  );
  
}

export default App;
