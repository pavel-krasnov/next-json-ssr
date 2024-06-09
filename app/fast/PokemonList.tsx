"use client";

import PokemonItem from "./PokemonItem";

type Props = {
    pokemons: string;
}

export default function PokemonList({ pokemons }: Props) {
    const pokemonObjects = JSON.parse(pokemons) as any[];

    return (
        <ul>
            {
                pokemonObjects.map((item, index) => <PokemonItem key={index} pokemon={item} />)
            }
        </ul>
    )
}
