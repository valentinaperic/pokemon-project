import React from 'react';
import PropTypes from "prop-types"


class SearchPokemon extends React.Component {
  
    state = {
      search: '',
      error: false,
    };

    static propTypes = {
      onPokemonChange: PropTypes.func,
    }

    setSearchValue = e => {
      const value = e.target.value
      this.setState({ search: value, error: false })
    }
 
    onSearchPokemon = e => {
      e.preventDefault();
    

      if (!this.state.search.trim()) {
        this.setState({ error: "You must enter a pokemon to search"});
      }
      this.setState({ error: false })

      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

      const url = fetch(proxyUrl + `http://pokeapi.co/api/v2/pokemon/${this.state.search}`);

      url
      .then(response => {
        if (!response.ok) throw new Error()
        return response.json();
      })
      .then(responseData => {
        this.props.onPokemonChange(responseData);
        console.log(responseData);
      })
      .catch(() => {
        this.setState({ error: true })
      })
    }

    render() {
      return (
        <form>
          <input type="text" value={this.state.search} onChange={this.setSearchValue}></input>
          <button type="submit" onClick={this.onSearchPokemon}>Search</button>
          <span style={{color: "red", display: "block"}}>{this.state.error}</span>
        </form>
      );
    }
  }


export default SearchPokemon;
