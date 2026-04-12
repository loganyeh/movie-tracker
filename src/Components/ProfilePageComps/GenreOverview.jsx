

function GenreOverview(){
    const genreOverviewData = [
        {genre: "Comedy", numOfEntries: 51, bgColor: "bg-green-500", textColor: "text-green-500", bar: "w-4/12"},
        {genre: "Action", numOfEntries: 46, bgColor: "bg-blue-500", textColor: "text-blue-500", bar: "w-3/12"},
        {genre: "Supernatural", numOfEntries: 38, bgColor: "bg-purple-500", textColor: "text-purple-500", bar: "w-2/12"},
        {genre: "Drama", numOfEntries: 33, bgColor: "bg-red-300", textColor: "text-red-300", bar: "w-2/12"},
        {genre: "Romance", numOfEntries: 31, bgColor: "bg-pink-500", textColor: "text-pink-500", bar: "w-1/12"},
    ]

    return(
        <>
            <div className="flex gap-2 flex-col">

                <div className="pl-2 text-gray-600 font-semibold">Genre Overview</div>

                <div className="flex flex-col bg-white shadow-md rounded">

                    <div className="px-2 py-4 flex justify-around">
                        {genreOverviewData.map((genre, index) => {
                            return <div key={index} className={`flex gap-2 flex-col items-center`}>
                                        <div className={`${genre.bgColor} px-3 py-1.5 text-center text-white 2xl:text-sm text-xs 2xl:font-normal font-light rounded`}>{genre.genre}</div>
                                        <div className={`${genre.textColor} 2xl:text-sm text-xs`}>{genre.numOfEntries} <span className="text-xs text-gray-400">Entries</span></div>
                                    </div>
                        })}
                    </div>

                    <div className="flex">
                        {genreOverviewData.map((genre, index) => {
                            return <div key={index} className={`p-1.5 ${genre.bar} ${genre.bgColor}`}></div>
                        })}
                    </div>

                </div>

            </div>
        
        </>
    )
}

export default GenreOverview;