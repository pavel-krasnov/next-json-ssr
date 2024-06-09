type Props = {
    pokemon: any;
};

export default function PokemonItem({ pokemon }: Props) {
    return (
        <li>
            {pokemon.name}
        </li>
    );
}
