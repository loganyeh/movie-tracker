import MovieBlock from "./TopMoviesComponents/MovieBlock.js";
import Poster from "./TrendingBlockComponents/Poster.js";

import type { Top10MoviesType } from "../API/api.js";

type TopMoviesBlockProp = {
    data: Top10MoviesType[];
    query: string;
}

function TopMoviesBlock({ data, query }: TopMoviesBlockProp ){
    const bubbleColors = ["bg-green-400", "bg-red-400", "bg-pink-400", "bg-red-500", "bg-red-400", "bg-yellow-200", "bg-blue-500", "bg-yellow-500", "bg-blue-300", "bg-yellow-200"];

    // console.log(data[0]?.genre_ids);

    return(
        <>
            <div className={`${query ? "hidden" : ""} w-full mb-16 flex gap-4 flex-col max-w-7xl`}>
                {/* header title */}
                <div className="flex items-center justify-between">
                    <div className="text-lg text-zinc-500 font-semibold leading-loose tracking-wider">TOP 100 Movies</div>
                    <div className="text-xs text-gray-400 font-semibold tracking-wide">View All</div>
                </div>

                {/* -> LG */}
                <div className="xl:hidden grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-2.5 gap-y-6">
                    {data.slice(0, 10).map((data, index) => {
                        return <div key={index} className="relative w-full aspect-[11/16] lg:aspect-[4/5] xl:aspect-[5/6] bg-center bg-cover rounded-lg"
                        style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${data.poster_path}`})`}}>
                            <div className={`absolute -top-2 -left-2 h-8 w-8 md:h-10 md:w-10 flex justify-center items-center ${bubbleColors[index]} text-gray-50 text-sm md:text-base rounded-full`}><span className="text-xs">#</span>{index + 1}</div>
                        </div>
                    })}
                </div>

                {/* XL -> */}
                {/* wip max-w-7xl */}
                <div className="hidden xl:flex gap-6 flex-col items-center">
                    {data.slice(0, 10).map((data, index) => {
                        return <MovieBlock key={index} index={index} original_title={data.original_title} poster_path={data.poster_path} vote_average={data.vote_average} vote_count={data.vote_count} popularity={data.popularity} release_date={data.release_date} genre_ids={data.genre_ids} />
                    })}
                </div>

            </div>
        </>
    )
}

export default TopMoviesBlock;