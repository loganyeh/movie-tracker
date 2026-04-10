import Poster from "./TrendingBlockComponents/Poster";
import { useState, useContext } from "react";
import { MyContext } from "../Context/MyContext";

function TrendingBlock({ title, data }){
    const [loading, setLoading] = useState();
    const { query, setQuery } = useContext(MyContext);

    return(
        <>
            <div className={`${!query ? "" : "hidden"} w-full flex flex-col gap-3`}>
                
                {/* trending now title/header */}
                <div className="flex items-center justify-between">
                    <div className="text-lg text-zinc-500 font-semibold leading-loose tracking-wider">{title}</div>
                    <div className="text-xs text-gray-400 font-semibold tracking-wide">View All</div>
                </div>

                {/* movie posters */}
                <div className="grid grid-cols-3 gap-3">
                {/* <div className="border h-auto w-full flex justify-center items-start"> */}
                    {/* {data.map((data, index) => {
                        return <Poster key={index} data={data} />
                    })} */}


                    {/* {Array.from({length: 6}).map((_, index) => {
                        return <div key={index} className="border flex flex-col gap-2">

                            <div className="border border-red-600 aspect-[11/16] bg-center bg-cover rounded-lg"
                            style={{ backgroundImage: `url${``}`}}></div>


                            <div className="border">TITLE</div>

                        </div>
                    })} */}

                    {data.map((data, index) => {
                        return <div key={index} className="border flex flex-col gap-2">
                            {/* Poster */}
                            <div className="aspect-[11/16] bg-center bg-cover rounded-lg"
                            style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${data.poster}`})`}}></div>

                            {/* Title */}
                            <div className="border text-xs font-semibold text-gray-400 line-clamp-2">{data?.title}</div>

                        </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default TrendingBlock;