import Trailer from "./Trailer.js";
import Following from "./Following.js";

import type { VideoType } from "../../../API/MovieOverviewAPI.js";

type TrailerFollowingProp = {
    data: VideoType[]
}

function TrailerFollowing({ data }: TrailerFollowingProp ){

    return(
        <>
            <div className="flex gap-6 flex-col xl:grid xl:grid-cols-2 xl:gap-x-8">

                {/* trailer */}
                <Trailer data={data} />

                {/* Following */}
                <Following />

            </div>
        
        </>
    )
}

export default TrailerFollowing;