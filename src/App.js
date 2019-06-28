import React, { Component } from 'react';

import './App.scss';

// App Components
import SearchPokemon from './components/SearchPokemon.js';
import DisplayPokemon from './components/DisplayPokemon/DisplayPokemon.js'; 


class App extends Component {
  state = {
    pokemon: null
  }

  onPokemonChange = pokemon => {
    this.setState({ pokemon })
  }

  render() {
    const { pokemon } = this.state

    return (
      <div className="App">
        <h1>Pokemon</h1>
        <SearchPokemon onPokemonChange={this.onPokemonChange} />
        <DisplayPokemon pokemon={pokemon}/>
      </div>
    );
  }
}

export default App;
