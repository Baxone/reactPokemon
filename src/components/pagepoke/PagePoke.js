
import React, { useState, useEffect } from 'react';
import { getOnePokemon } from '../../services/pokemonServices';
import './PagePoke.scss';
import { Link } from 'wouter';




function PagePoke({ params }) {
    const [pokemon, setPokemon] = useState([])
    const { page } = params;
    useEffect(() => {

        getOnePokemon(page).then(pokemon => {
            setPokemon(pokemon)
        });
    }, [page])


    return (
        <section className="view">
            <Link className="goback" to="/">Volver a listado</Link>
            <article>
                <div className="imagesview">
                    <img src={pokemon.sprite ? pokemon.sprite : ''} alt={pokemon.name} />
                    <div className="pokemonid">ID / {pokemon.id}</div>
                </div>
                <div className="content">
                    <h2>{pokemon.name}</h2>
                    <hr noshade="noshade" />
                    <ul>
                        {pokemon.type && pokemon.type.map((item, index) => { return <li key={index}>{item}</li>; })}
                    </ul>

                    {pokemon.evolution !== null &&
                        <div>
                            <p>Evoluciona de:</p>
                            <h3>{pokemon.evolution ? pokemon.evolution : ''}</h3>
                        </div>
                    }
                    <hr noshade="noshade" />
                    <h2 className="abilities">Habilidades</h2>

                    <ul>
                        {pokemon.abilities && pokemon.abilities.map((item, index) => { return <li key={index}>{item}</li>; })}
                    </ul>
                </div>

            </article>
        </section>
    );
}

export default PagePoke;
