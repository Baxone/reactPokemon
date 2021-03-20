
import React, { useState, useEffect } from 'react';
import { getOnePokemon } from '../../services/pokemonServices';
import './Pokecard.scss';



function PokemonCard({ name, url }) {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        getOnePokemon({ url }).then(pokemon => setPokemon(pokemon));
    }, [url])


    return (
        <a href={`#${pokemon.id}`}>
            <article>
                <div className="images">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} title={pokemon.name} />
                    <div className="pokemonid">ID / {pokemon.id}</div>
                </div>
                <div className="content">
                    <h2>{name}</h2>
                    <ul>
                        <li>POISON</li>
                        <li>GRASS</li>
                    </ul>
                    <div>
                        <p>Evoluciona de:</p>
                        <h3>Bulbasaur</h3>
                    </div>
                </div>
            </article>
        </a>
    );
}

export default PokemonCard;
