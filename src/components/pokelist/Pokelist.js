
import React from 'react';
import PokemonCard from '../pokecard/PokemonCard';
import './Pokelist.scss';

const pokelist = [
    {
        id: 1,
        name: 'hh',
        evolution: 'ss'
    },
    {
        id: 2,
        name: 'hh',
        evolution: 'ss'
    },
    {
        id: 3,
        name: 'hh',
        evolution: 'ss'
    },
    {
        id: 4,
        name: 'hh',
        evolution: 'ss'
    },
];


function Pokelist() {
    return (
        <section className="grid">
            {
                pokelist.map(pokemon => (
                    <div className="col-12 col-t-6 col-t-4" key={pokemon.id}>
                        <PokemonCard />
                    </div>
                ))
            }
        </section>

    );
}

export default Pokelist;
