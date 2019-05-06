import React from 'react';


class SearchPokemon extends React.Component { 
    constructor() {
      super();

      this.SearchPokemon = this.SearchPokemon.bind(this);
      this.state = {
        search: ''
      };
    }

    SearchPokemon(e) {

      e.preventDefault();
      
      const url = fetch(`http://pokeapi.co/api/v2/pokemon/{e}`);
      
      const pokemon = document.querySelector("#pokemonInformation");
     
        url 
        .then(function(response) {
            const promiseResponse = response.json();
            return promiseResponse;
    
        })
        .then(function(promiseResponse) {
            const pokemonName = document.createElement("h1");
            pokemonName.innerText = promiseResponse.name;
            pokemon.appendChild(pokemonName);
        });
    }
  
    render() {
      return (
        <div>
          <input type="text" value={this.state.search} onChange={event => this.SearchPokemon(event.target.value)}></input>
          <button onClick={this.SearchPokemon}>Search</button>
        </div>
 
      );
    }
  }
  
  
export default SearchPokemon;
