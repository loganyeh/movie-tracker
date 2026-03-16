

function CharacterCard({ data }){
    
    return(
        <>
            <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                <div className="h-full w-1/4 bg-blue-300">
                    <img className="h-full w-full" src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`} alt="" />
                </div>
                <div className="h-full w-2/4">
                    <div className="h-1/2 w-full flex">
                        <div className="h-full w-1/2 p-1 flex justify-center items-start text-sm">{ data.character ||"Tanjirou Kamado"}</div>
                        <div className="h-full w-1/2 p-1 flex justify-end items-end text-sm">{ data.name || "Natsuki Hinae"}</div>
                    </div>
                    <div className="h-1/2 w-full flex">
                        <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">{ "" || "Main"}</div>
                        <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">{ "" || "Japanese"}</div>
                    </div>
                </div>
                <div className="h-full w-1/4 bg-blue-300"></div>
            </div>
        </>
    )
}

export default CharacterCard;