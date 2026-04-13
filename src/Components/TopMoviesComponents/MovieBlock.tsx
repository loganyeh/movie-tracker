import { genreIDSwitch } from "../../Functions/function.ts";
import { movieRatingColor } from "../../Functions/function.ts";

type MovieBlockType = {
    index: number;
    original_title: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    release_date: string;
    genre_ids: number[];
}

function MovieBlock({ index, original_title, poster_path, vote_average, vote_count, popularity, release_date, genre_ids }: MovieBlockType){
    const bubbleColors = ["bg-green-400", "bg-red-400", "bg-pink-400", "bg-red-500", "bg-red-400", "bg-yellow-200", "bg-blue-500", "bg-yellow-500", "bg-blue-300", "bg-yellow-200"];
    const hoverBubbleColors = ["hover:text-green-400", "hover:text-red-400", "hover:text-pink-400", "hover:text-red-500", "hover:text-red-400", "hover:text-yellow-200", "hover:text-blue-500", "hover:text-yellow-500", "hover:text-blue-300", "hover:text-yellow-200"];


    return(
        <>
            <div className="w-full max-w-7xl flex">

                {/* ranking */}
                <div className="p-6 flex items-center text-gray-600">
                    <span className="text-lg">#</span><span className="text-2xl">{index + 1}</span>
                </div>
                
                {/* poster info */}
                <div className="w-full px-3 py-2 flex justify-between bg-white rounded shadow-md">

                    {/* left side */}
                    <div className="flex gap-3">
                        {/* poster */}
                        <div className="aspect-3/4 bg-blue-300 rounded bg-cover bg-center"
                        style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${poster_path}`}`}}>
                        </div>

                        {/* title and genre */}
                        <div className="flex gap-2 flex-col justify-center">
                            <div className="2xl:text-lg text-gray-600 font-medium">{original_title}</div>
                            <div className="flex gap-3">
                                {genre_ids.map((genre, index) => {
                                    return <div key={index} className={`px-3.5 flex items-center ${bubbleColors[index]} text-xs text-gray-900 font-semibold rounded-xl shadow`}>{genreIDSwitch(genre)}</div>
                                })}
                            </div>
                        </div>

                    </div>

                    {/* right side */}
                    {/* movie stats */}
                    <div className="px-24 grid gap-10 grid-cols-4 items-center">

                        <i className={`text-end bx bx-smile 2xl:text-3xl xl:text-2xl text-green-500 
                            ${movieRatingColor(vote_average)}
                            rounded-full`} >    
                        </i>

                        {/* create comp  */}
                        <div className="">
                            <div className="2xl:text-base xl:text-sm">{vote_average}%</div>
                            <div className="text-gray-400 text-xs font-normal">{vote_count} Votes</div>
                        </div>

                        <div className="">
                            <div className="text-gray-600 2xl:text-base xl:text-sm font-medium">MOVIE</div>
                            <div className="text-gray-400 text-xs font-normal">{popularity} Fans</div>
                        </div>

                        <div className="">
                            <div className="text-gray-600 2xl:text-base xl:text-sm font-medium">Premiered</div>
                            <div className="text-gray-400 text-xs font-normal">{release_date}</div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MovieBlock;