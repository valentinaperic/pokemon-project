import React from 'react';
import PropTypes from "prop-types"


function DisplayPokemon ({pokemon}) {

    if (!pokemon) {
        return null;
    }

    return (
    
        <div className="display-pokemon">
            <div>
                <h1>
                { pokemon.name }
                </h1>
                <div className="pokemonImage">
                    <img alt="pokemon species" src={pokemon.sprites.front_default} />
                </div>
                <div className="pokemonDescription">
                    <p>ID: { pokemon.id }</p>
                    <p>Height: { pokemon.height }</p>
                    <p> Type: { pokemon.types[0].type.name }</p>
                    <p> Ability: { pokemon.types[0].type.name }</p>
                </div>
            </div>
        </div>
    )
}


export default DisplayPokemon;
