

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
            <div className="h-auto w-4/5 mt-4">
                <div className="2xl:h-10 xl:h-10 w-full pl-2 flex justify-start items-center 2xl:text-base xl:text-sm text-gray-600 font-semibold">Genre Overview</div>

                <div className="h-auto w-full flex flex-col bg-white shadow-md rounded">

                    <div className="2xl:h-24 xl:h-20 w-full flex">
                        {genreOverviewData.map((genre, index) => {
                            return <div key={index} className={`h-full w-1/5 flex flex-col justify-center items-center`}>
                                        <div className={`2xl:h-8 w-10/12 xl:h-6 flex justify-center items-center ${genre.bgColor} text-white 2xl:text-sm xl:text-xs 2xl:font-normal xl:font-light rounded`}>{genre.genre}</div>
                                        <div className={`mt-1 ${genre.textColor} 2xl:text-sm xl:text-xs`}>{genre.numOfEntries} <span className="text-xs text-gray-400">Entries</span></div>
                                    </div>
                        })}
                    </div>

                    <div className="h-2 w-full flex">
                        {genreOverviewData.map((genre, index) => {
                            return <div key={index} className={`h-full ${genre.bar} ${genre.bgColor}`}></div>
                        })}
                    </div>

                </div>
            </div>
        
        </>
    )
}

export default GenreOverview;