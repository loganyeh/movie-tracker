

function FavoriteBlock({ title, numOfFavs}){

    return(
        <>
            <div className="h-auto w-10/12 mt-10">

                {/* Anime Title */}
                <div className="h-auto w-full flex justify-between items-center">
                    <div className="h-12 w-auto flex justify-center items-center text-lg font-semibold text-gray-600">{title || "Anime"}</div>
                    <div className="h-8 w-auto px-3 flex justify-center items-center bg-blue-400 text-white text-sm rounded">Reorder</div>
                </div>

                {/* Anime Fav Body */}
                <div className="h-auto w-full flex justify-center items-center">
                    <div className="min-h-40 w-full mx-2 flex flex-wrap justify-around items-center bg-white shadow-md rounded">
                        {Array.from({length: numOfFavs || 10}).map((_, index) => {
                            return <div key={index} className="border h-30 w-24 m-4 bg-blue-400 rounded"></div>
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default FavoriteBlock