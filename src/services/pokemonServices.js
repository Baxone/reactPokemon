const pokeApiURL = 'https://pokeapi.co/api/v2/pokemon'

export async function getPokemons(page) {
    const response = await fetch(`${pokeApiURL}?offset=${page}&limit=9`);
    const data = await response.json();
    return data.results;
}

export async function getOnePokemon(route) {
    const response = await fetch(route.url);
    const data = await response.json();
    return data;
}
