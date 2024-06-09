"use client";

import PokemonItem from "./PokemonItem";

type Props = {
    pokemons: any[];
}

export default function PokemonList({ pokemons }: Props) {
    return (
        <ul>
            {
                pokemons.map((item, index) => <PokemonItem key={index} pokemon={item} />)
            }
        </ul>
    )
}
