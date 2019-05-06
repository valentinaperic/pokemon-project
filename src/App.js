import React from 'react';
import './App.css';

// App Components
import SearchPokemon from './components/SearchPokemon.js';


function App() {
  return (
    <div className="App">
      <h1>Welcome to the Great World of Pokemon</h1>
      <SearchPokemon />
      <div id="pokemonInformation"></div>
    </div>
  ); 
} 








export default App;
