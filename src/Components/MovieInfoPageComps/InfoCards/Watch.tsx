
import type { VideoType } from "../../../API/MovieOverviewAPI.js";

type WatchProp = {
    data: VideoType[];
}

function Watch({ data }: WatchProp ){
    const watchData = [
        {number: "1", title: "Cruelty"},
        {number: "2", title: "Trainer"},
        {number: "3", title: "Sabito"},
        {number: "4", title: "Final Selection"},
    ];

    return(
        <>
            <div className="flex gap-2 flex-col">
                {/* STATUS */}
                <div className="text-gray-600 font-semibold">Watch</div>

                <div className="flex gap-8 overflow-x-auto scroll-smooth">
                    {data.slice(0, 10).map((data, index) => {
                        return <div key={index} className="w-48 flex items-end aspect-video bg-blue-300 rounded shadow-md bg-cover bg-center shrink-0"
                                style={{ backgroundImage: `url(${`https://img.youtube.com/vi/${data.key}/hqdefault.jpg`})` }}>
                                    <div className="p-1 text-center text-white text-[10px] bg-black/60">{data.name}</div>
                                </div>
                    })}
                    
                </div>

            </div>

        </>
    )
}

export default Watch;