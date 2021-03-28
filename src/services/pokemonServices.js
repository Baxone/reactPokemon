const pokeApiURL = 'http://localhost:3000/pokemons'

export async function getPokemons() {
    const response = await fetch(`${pokeApiURL}`);
    const data = await response.json();
    return data;
}

export async function getOnePokemon(page) {
    const response = await fetch(`${pokeApiURL}/${page}`);
    const pokemon = await response.json();
    return pokemon;
}

export async function getPokemonsByName(name) {
    const response = await fetch(`${pokeApiURL}/search/${name}`);
    const pokemon = await response.json();
    return pokemon;
}
