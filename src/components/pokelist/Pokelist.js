
import React, { useState, useEffect } from 'react';
import PokemonCard from '../pokecard/PokemonCard';
import './Pokelist.scss';
import { getPokemons } from '../../services/pokemonServices';

function Pokelist(props) {
    const page = props.params.page;
    const [loading, setLoading] = useState([false])
    const [pokelist, setPokemons] = useState([])

    useEffect(() => {
        setLoading(true);
        getPokemons(page).then(pokemons => {
            setPokemons(pokemons);
            setLoading(false);
        });
    }, [page])

    if (loading) return <div className="loading"><img src="http://cdn.lowgif.com/full/c052dced5bb8e43a-.gif" alt="" /></div>

    return (
        <section className="grid">
            {
                pokelist.map(({ name, url }) => (
                    <div className="col-12 col-t-6 col-d-4" key={url}>
                        <PokemonCard
                            name={name}
                            url={url}
                        />
                    </div>
                ))
            }
        </section>

    );
}

export default Pokelist;
