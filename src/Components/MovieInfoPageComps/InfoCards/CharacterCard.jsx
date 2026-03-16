

function CharacterCard({ character, actor, lead, language }){
    
    return(
        <>
            <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                <div className="h-full w-1/4 bg-blue-300"></div>
                <div className="h-full w-2/4">
                    <div className="h-1/2 w-full flex">
                        <div className="h-full w-1/2 p-1 flex justify-center items-start text-sm">{ character ||"Tanjirou Kamado"}</div>
                        <div className="h-full w-1/2 p-1 flex justify-end items-end text-sm">{ actor || "Natsuki Hinae"}</div>
                    </div>
                    <div className="h-1/2 w-full flex">
                        <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">{ lead || "Main"}</div>
                        <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">{ language || "Japanese"}</div>
                    </div>
                </div>
                <div className="h-full w-1/4 bg-blue-300"></div>
            </div>
        </>
    )
}

export default CharacterCard;