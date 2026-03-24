

function FavoritesBlock({ blockName, posterAmount }){

    return(
        <>
            <div className="h-auto w-4/5 mt-4">
                <div className="h-10 w-full pl-2 flex justify-start items-center text-md text-gray-600 font-semibold">{blockName || "Anime"}</div>
                <div className="min-h-44 w-full flex flex-wrap justify-around items-center bg-white shadow-md rounded">
                    {Array.from({length: (posterAmount || 5)}).map((_, index) => {
                        return <div key={index} className="border h-32 w-24 m-3 bg-blue-300 rounded"></div>
                    })}
                </div>
            </div>
        </>
    )
}

export default FavoritesBlock;