import React from 'react';
import PropTypes from "prop-types"


class SearchPokemon extends React.Component {
    constructor() {
      super();

      this.onSearchPokemon = this.onSearchPokemon.bind(this);
      this.state = {
        search: '',
        error: false,
      };
    }

    static propTypes = {
      onPokemonChange: PropTypes.func,
    }

    setSearchValue = e => {
      const value = e.target.value
      this.setState({ search: value, error: false })
    }

    onSearchPokemon(e) {
      e.preventDefault();
      this.setState({ error: false })

      const url = fetch(`http://pokeapi.co/api/v2/pokemon/${this.state.search}`);

      url
      .then(response => {
        if (!response.ok) throw new Error()
        return response.json();
      })
      .then(responseData => {
        this.props.onPokemonChange(responseData);
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

          {this.state.error && (
            <div>Something went wrong</div>
          )}
        </form>

      );
    }
  }


export default SearchPokemon;
