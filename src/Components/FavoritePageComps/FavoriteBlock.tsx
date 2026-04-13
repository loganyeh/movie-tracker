
type FavoriteBlockProp = {
    title: string;
    numOfFavs: number;
}

function FavoriteBlock({ title, numOfFavs}: FavoriteBlockProp){

    return(
        <>
            <div className="flex gap-3 flex-col">

                {/* Anime Title */}
                <div className="flex justify-between items-center">
                    <div className="font-semibold text-gray-600">{title || "Anime"}</div>
                    <div className="p-1.5 bg-blue-400 text-white text-xs rounded">Reorder</div>
                </div>

                {/* Anime Fav Body */}
                <div className="py-6 grid gap-y-6 grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-11 place-items-center bg-white shadow rounded">
                    {Array.from({length: numOfFavs || 10}).map((_, index) => {
                        return <div key={index} className="border border-gray-200 w-[88px] aspect-[2/3] bg-blue-300 rounded"></div>
                    })}
                </div>

            </div>
        </>
    )
}

export default FavoriteBlock