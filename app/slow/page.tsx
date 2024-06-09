import Pokemons from "./Pokemons";

async function fetchPokemon(id: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
}

const pokemonIds = Array
    .from({ length: 20 })
    .map((_item, index) => index + 1);

export default async function Home() {
    const pokemons = await Promise.all<any>(pokemonIds.map(item => fetchPokemon(item)));

    return <Pokemons pokemons={pokemons} />;
}
