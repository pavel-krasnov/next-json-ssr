"use client";

import Pokemon from "./Pokemon";

type Props = {
    pokemons: string;
}

export default function Pokemons({ pokemons }: Props) {
    const pokemonObjects = JSON.parse(pokemons) as any[];

    return (
        <div>
            {
                pokemonObjects.map((item, index) => <Pokemon key={index} pokemon={item} />)
            }
        </div>
    )
}
