

function FavoriteBlock({ title, numOfFavs}){

    return(
        <>
            <div className="h-auto w-9/12 mt-10">

                {/* Anime Title */}
                <div className="h-auto w-full flex justify-between items-center">
                    <div className="2xl:h-12 xl:h-10 w-auto flex justify-center items-center 2xl:text-lg xl:text-base font-semibold text-gray-600">{title || "Anime"}</div>
                    <div className="2xl:h-8 xl:h-6 w-auto 2xl:px-3 xl:px-2 flex justify-center items-center bg-blue-400 text-white 2xl:text-sm xl:text-xs rounded">Reorder</div>
                </div>

                {/* Anime Fav Body */}
                <div className="border h-auto w-full flex justify-center items-center">
                    <div className="min-h-40 w-full mx-2 flex flex-wrap justify-around items-center bg-white shadow-md rounded">
                        {Array.from({length: numOfFavs || 10}).map((_, index) => {
                            return <div key={index} className="border h-30 w-24 2xl:m-4 xl:m-3 bg-blue-300 rounded"></div>
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default FavoriteBlock