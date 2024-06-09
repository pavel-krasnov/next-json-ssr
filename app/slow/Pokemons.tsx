"use client";

import Pokemon from "./Pokemon";

type Props = {
    pokemons: any[];
}

export default function Pokemons({ pokemons }: Props) {
    return (
        <div>
            {
                pokemons.map((item, index) => <Pokemon key={index} pokemon={item} />)
            }
        </div>
    )
}
