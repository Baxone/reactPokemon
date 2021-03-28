
import React, { useState, useEffect } from 'react';
import { getOnePokemon } from '../../services/pokemonServices';
import './Pokecard.scss';
import { Link } from 'wouter';


function PokemonCard({ name, id }) {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        getOnePokemon(id).then(pokemon => {
            setPokemon(pokemon)
        });
    }, [id])

    return (

        <article className="pokecard">
            <Link className="link" to={`/pokemon/${pokemon.id}`}>
                <div className="images">
                    <img src={pokemon.sprite ? pokemon.sprite : ''} alt={pokemon.name} />
                    <div className="pokemonid">ID / {pokemon.id}</div>
                </div>
                <div className="content">
                    <h2>{name}</h2>
                    <ul>
                        {pokemon.type && pokemon.type.map((item, index) => { return <li key={index}>{item}</li>; })}
                    </ul>
                    {pokemon.evolution !== null &&
                        <div>
                            <p>Evoluciona de:</p>
                            <h3>{pokemon.evolution ? pokemon.evolution : ''}</h3>
                        </div>
                    }

                </div>
            </Link>
        </article>

    );
}

export default PokemonCard;
