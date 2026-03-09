import { genreIDSwitch } from "../../Functions/function";

function MovieBlock({ data }){
    const bubbleColors = ["bg-green-400", "bg-red-400", "bg-pink-400", "bg-red-500", "bg-red-400", "bg-yellow-200", "bg-blue-500", "bg-yellow-500", "bg-blue-300", "bg-yellow-200"];

    return(
        <>
            <div className="h-20 w-full flex mb-8">
                {/* ranking */}
                <div className="h-full w-1/12 flex justify-center items-center text-2xl">#{data.key + 1}</div>
                
                {/* poster info */}
                <div className="h-full w-11/12 flex bg-white rounded shadow-md">
                    {/* poster */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                        <img className="h-11/12 w-1/2 rounded" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                    </div>

                    {/* title and genre */}
                    <div className="h-full w-6/12">
                        <div className="h-1/2 w-full flex justify-start items-end text-lg font-medium">{data.title}</div>
                        <div className="h-1/2 w-full flex justify-start items-center">
                            {data.genre_ids.map((genre, index) => {
                                return <div key={index} className={`h-6 w-auto px-4 mr-2 flex justify-center items-center ${bubbleColors[data.key]} text-xs text-gray-900 font-semibold rounded-xl shadow`}>{genreIDSwitch(genre)}</div>
                            })}
                        </div>
                    </div>

                    {/* movie stats */}
                    <div className="h-full w-5/12 flex">
                        <div className="h-full w-1/12 flex justify-start items-center">
                            <i className='bx bx-circle text-3xl text-green-500 bg-green-500 rounded-full'></i>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">{data.vote_average}</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">{data.vote_count} Votes</div>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">MOVIE</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">{data.popularity} Fans (FIX)</div>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">{data.release_date}</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">FIX</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MovieBlock;