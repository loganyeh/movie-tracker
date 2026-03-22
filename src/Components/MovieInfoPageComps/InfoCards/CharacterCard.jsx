

function CharacterCard({ data }){

    // fix card name and language stuff
    
    return(
        <>
            <div className="border-2 border-red-600 min-h-28 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                <div className="border min-h-28 w-1/4 bg-blue-300">
                    <img className="h-auto w-auto" src={`https://image.tmdb.org/t/p/original${data?.profile_path}`} alt="no img available" />
                </div>
                <div className="h-full w-3/4">
                    <div className="border h-1/2 w-full flex">
                        <div className="h-full w-1/2 p-1 flex justify-center items-start text-sm">{data?.character ||"Tanjirou Kamado"}</div>
                        <div className="h-full w-1/2 p-1 flex justify-end items-end text-sm">{data?.name ||"Natsuki Hinae"}</div>
                    </div>
                    <div className="border h-1/2 w-full flex">
                        <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">{"" ||"Main"}</div>
                        <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">{"" ||"Japanese"}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CharacterCard;