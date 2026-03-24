import { genreIDSwitch } from "../../Functions/function";
import { movieRatingColor } from "../../Functions/function";

function MovieBlock({ data }){
    const bubbleColors = ["bg-green-400", "bg-red-400", "bg-pink-400", "bg-red-500", "bg-red-400", "bg-yellow-200", "bg-blue-500", "bg-yellow-500", "bg-blue-300", "bg-yellow-200"];
    const hoverBubbleColors = ["hover:text-green-400", "hover:text-red-400", "hover:text-pink-400", "hover:text-red-500", "hover:text-red-400", "hover:text-yellow-200", "hover:text-blue-500", "hover:text-yellow-500", "hover:text-blue-300", "hover:text-yellow-200"];


    return(
        <>
            <div className="h-20 w-full flex mb-8">
                {/* ranking */}
                <div className="h-full w-1/12 flex justify-center items-center">
                    <div className="h-1/2 w-1/2 flex justify-center items-center text-gray-600">
                        <span className="mr-1 text-xl">#</span>
                        <span className="text-3xl">{data.key + 1}</span>
                    </div>
                </div>
                
                {/* poster info */}
                <div className="h-full w-11/12 flex bg-white rounded shadow-md">
                    {/* poster */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                        <img className="h-11/12 w-1/2 rounded" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                        {/* <img className="h-11/12 w-1/2 rounded cursor-pointer" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} /> */}
                    </div>

                    {/* title and genre */}
                    <div className="h-full w-6/12">
                        <div className="h-1/2 w-full flex justify-start items-end text-lg text-gray-600 font-medium">
                            <span>{data.title}</span>
                            {/* <span className={`${hoverBubbleColors[data.key]} cursor-pointer`}>{data.title}</span> */}
                        </div>
                        <div className="h-1/2 w-full flex justify-start items-center">
                            {data.genre_ids.map((genre, index) => {
                                return <div key={index} className={`h-6 w-auto px-4 mr-2 flex justify-center items-center ${bubbleColors[data.key]} text-xs text-gray-900 font-semibold rounded-xl shadow`}>{genreIDSwitch(genre)}</div>
                                // return <div key={index} className={`h-6 w-auto px-4 mr-2 flex justify-center items-center ${bubbleColors[data.key]} text-xs text-gray-900 font-semibold rounded-xl shadow cursor-pointer`}>{genreIDSwitch(genre)}</div>
                            })}
                        </div>
                    </div>

                    {/* movie stats */}
                    <div className="h-full w-5/12 flex">
                        <div className="h-full w-1/12 flex justify-start items-center">
                            <i className={`bx bx-smile text-3xl text-green-500 
                                ${movieRatingColor(data.vote_average)}
                                rounded-full`} >    
                            </i>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">
                                <div className="mr-1 flex justify-center items-center">{data.vote_average}%</div>
                            </div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">{data.vote_count} Votes</div>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">MOVIE</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">{data.popularity} Fans</div>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">Premiered</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">{data.release_date}</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MovieBlock;