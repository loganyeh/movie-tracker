

function CharacterCard({ data }){
    
    return(
        <>
            <div className="flex items-center bg-white rounded shadow">
                <div className="w-20 aspect-[3/4] bg-cover bg-center rounded-l"
                style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/original${data?.profile_path}`})`}}></div>
                <div className="w-full p-2 flex justify-between text-sm">
                    <div className="text-gray-600">{data?.character ||"Tanjirou Kamado"}</div>
                    <div className="text-gray-500">{data?.name ||"Natsuki Hinae"}</div>
                </div>
            </div>
        </>
    )
}

export default CharacterCard;