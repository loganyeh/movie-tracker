import Poster from "./TrendingBlockComponents/Poster";
import { useState } from "react";

function TrendingBlock({ title, data, query, setMovieID }){
    const [loading, setLoading] = useState();

    return(
        <>
            <div className={`${query ? "hidden" : ""} w-full max-w-7xl flex flex-col gap-3`}>
                
                {/* trending now title/header */}
                <div className="flex items-center justify-between">
                    <div className="text-lg text-zinc-500 font-semibold leading-loose tracking-wider">{title}</div>
                    <div className="text-xs text-gray-400 font-semibold tracking-wide">View All</div>
                </div>

                {/* movie posters */}
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 gap-3 lg:gap-4 xl:gap-10">
                    {data.map((data, index) => {
                        return <Poster key={index} data={data} setMovieID={setMovieID} />
                    })}
                </div>

            </div>
        </>
    )
}

export default TrendingBlock;