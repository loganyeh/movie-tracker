import Poster from "./TrendingBlockComponents/Poster";

function SearchMovieBlock({ data }){
    const bubbleColors = ["hover:text-green-400", "hover:text-red-400", "hover:text-pink-400", "hover:text-red-500", "hover:text-red-400", "hover:text-blue-500"];

    return(
        <>
            {/* <div className="border-2 border-yellow-400 h-200 w-10/12 mb-10">
            </div> */}
            {/* left off here need to do something with h-96 to keep poster sizing the same */}
                <div className="border-2 border-yellow-600 h-96 w-10/12 mb-6">
                    {/* trending now title/header */}
                    <div className="border border-red-600 h-8 w-full flex">
                        <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-700 font-medium">ADD QUERY SEARCH HERE</div>
                        <div className="h-full w-1/2 flex justify-end items-center text-xs text-gray-400 font-medium">
                            <span className="cursor-pointer hover:text-gray-700">View All</span>
                        </div>
                    </div>

                    {/* movie posters */}
                    <div className="border border-blue-600 h-11/12 w-full flex flex-wrap">
                        {data.map((data, index) => {
                            return <Poster key={index} data={data} />
                        })}
                    </div>
                </div>
        </>
    )
}

export default SearchMovieBlock;