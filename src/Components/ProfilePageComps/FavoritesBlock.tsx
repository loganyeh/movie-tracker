
type FavoritesBlockProp = {
    blockName: string;
    posterAmount: number;
}

function FavoritesBlock({ blockName, posterAmount }: FavoritesBlockProp){

    return(
        <>
            <div className="flex gap-2 flex-col">
                <div className="pl-2 text-gray-600 font-semibold">{blockName || "Anime"}</div>

                <div className="p-5 grid gap-4 grid-cols-4 2xl:grid-cols-5 place-items-center bg-white shadow-md rounded">
                    {Array.from({length: (posterAmount || 5)}).map((_, index) => {
                        return <div key={index} className="w-20 aspect-[3/4] bg-blue-300 rounded shadow"></div>
                    })}
                </div>
            </div>
        </>
    )
}

export default FavoritesBlock;