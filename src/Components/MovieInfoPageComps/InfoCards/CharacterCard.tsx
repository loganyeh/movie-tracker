
type CharacterCardProp = {
    profile_path: string;
    character: string;
    name: string;
}

function CharacterCard({ profile_path, character, name }: CharacterCardProp ){
    
    return(
        <>
            <div className="flex items-center bg-white rounded shadow">
                <div className="w-20 aspect-[3/4] bg-cover bg-center rounded-l"
                style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/original${profile_path}`})`}}></div>
                <div className="w-full p-2 flex justify-between text-sm">
                    <div className="text-gray-600">{character ||"Tanjirou Kamado"}</div>
                    <div className="text-gray-500">{name ||"Natsuki Hinae"}</div>
                </div>
            </div>
        </>
    )
}

export default CharacterCard;