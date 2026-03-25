

function FavoritesBlock({ blockName, posterAmount }){

    return(
        <>
            <div className="h-auto w-4/5 mt-4">
                <div className="2xl:h-10 xl:h-8 w-full pl-2 flex justify-start items-center 2xl:text-base xl:text-sm text-gray-600 font-semibold">{blockName || "Anime"}</div>
                <div className="2xl:min-h-44 xl:min-h-32 w-full flex flex-wrap justify-around items-center bg-white shadow-md rounded">
                    {Array.from({length: (posterAmount || 5)}).map((_, index) => {
                        return <div key={index} className="border 2xl:h-32 2xl:w-24 xl:h-24 xl:w-20 2xl:m-3 xl:m-2 bg-blue-300 rounded"></div>
                    })}
                </div>
            </div>
        </>
    )
}

export default FavoritesBlock;