import Pokemons from "./Pokemons";

async function fetchPokemon(id: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.text();
}

const pokemonIds = Array
    .from({ length: 20 })
    .map((_item, index) => index + 1);

export default async function Home() {
    const pokemonsStringArray = await Promise.all<string>(pokemonIds.map(item => fetchPokemon(item)));
    const pokemonsString = `[${pokemonsStringArray.join(",")}]`;

    return <Pokemons pokemons={pokemonsString} />;
}
