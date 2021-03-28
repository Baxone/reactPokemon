
import React, { useState, useEffect } from 'react';
import PokemonCard from '../pokecard/PokemonCard';
import './Pokelist.scss';
import { getPokemons, getPokemonsByName } from '../../services/pokemonServices';

function Pokelist({ params }) {
    const { name } = params;
    const [pokelist, setPokemons] = useState([])

    useEffect(() => {
        if (name) {
            getPokemonsByName(name).then(pokemons => {
                setPokemons(pokemons);
            });
        } else {
            getPokemons().then(pokemons => {
                setPokemons(pokemons);
            });
        }

    }, [name])


    return (
        <section className="grid">
            {
                pokelist.map(({ name, id }) => (
                    <div className="col-12 col-t-6 col-d-4" key={id}>
                        <PokemonCard
                            name={name}
                            id={id}
                        />
                    </div>
                ))
            }
        </section>

    );
}

export default Pokelist;
