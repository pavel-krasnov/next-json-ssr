type Props = {
    pokemon: any;
};

export default function Pokemon({ pokemon }: Props) {
    return (
        <button>
            {pokemon.name}
        </button>
    );
}
