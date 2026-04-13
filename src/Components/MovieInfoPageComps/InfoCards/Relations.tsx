
import type { RelationsType } from "../../../API/MovieOverviewAPI.js";

type RelationsProp = {
    data: RelationsType[];
}

function Relations({ data }: RelationsProp){

    return(
        <>
            <div className="flex gap-2 flex-col">

                <div className="text-gray-600 font-semibold">Relations</div>

                <div className="flex gap-8 md:gap-4 md:flex-col xl:grid xl:grid-cols-2 xl:gap-x-8 overflow-x-auto scroll-smooth">
                    {data.slice(0, 6)?.map((data, index) => {
                        return <div key={index} className="flex shrink-0">
                                    <div className="w-20 aspect-[2/3] rounded-l-md shadow-md bg-center bg-cover"
                                    style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/original${data.poster_path}`})`}}>
                                    </div>

                                    <div className="p-2.5 pr-6 flex-1 flex flex-col justify-between bg-white text-xs rounded-r-md">
                                        <div className="text-blue-400">Source</div>
                                        <div className="text-gray-500">Demon Slayer: Kimetsu no Yaiba</div>
                                        <div className="text-gray-400">Manga * Finished</div>
                                    </div>
                                </div>
                    })}
                </div>
                
            </div>
        </>
    )
}

export default Relations;