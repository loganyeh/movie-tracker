

function CharacterCard({ data }){

    // fix card name and language stuff
    
    return(
        <>
            <div className="h-auto 2xl:w-80 xl:w-5/12 mr-10 mb-6 flex bg-white rounded shadow-md">
                <div className="h-auto 2xl:w-1/4 xl:w-auto bg-blue-300 rounded-l">
                    <img className="2xl:h-auto w-auto xl:h-28 rounded-l" src={`https://image.tmdb.org/t/p/original${data?.profile_path}`} alt="no img available" />
                </div>
                <div className="h-28 w-3/4">
                    <div className="h-full w-full flex justify-around items-center">
                        <div className="h-full w-auto p-1 flex justify-center items-center text-sm text-gray-600">{data?.character ||"Tanjirou Kamado"}</div>
                        <div className="h-full w-auto p-1 flex justify-start items-center text-sm text-gray-500">{data?.name ||"Natsuki Hinae"}</div>
                    </div>
                    {/* <div className="h-1/3 w-full flex">
                        <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">{"" ||"Main"}</div>
                        <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">{data?.known_for_department ||"Japanese"}</div>
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default CharacterCard;