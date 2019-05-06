import React, { Component } from 'react';

import './App.css';

// App Components
import SearchPokemon from './components/SearchPokemon.js';


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
        <h1>Welcome to the Great World of Pokemon</h1>
        <SearchPokemon onPokemonChange={this.onPokemonChange} />
        {!!pokemon && (
          <div>
            <h1>
              { pokemon.name }
            </h1>
            <img alt="pokemon species" src={pokemon.sprites.front_female} />
            <p>Height: { pokemon.height }</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
