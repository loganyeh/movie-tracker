import Trailer from "./Trailer";
import Following from "./Following";

function TrailerFollowing({ trailerData }){

    return(
        <>
            <div className="flex gap-6 flex-col">

                {/* trailer */}
                <Trailer data={trailerData} />

                {/* Following */}
                <Following />

            </div>
        
        </>
    )
}

export default TrailerFollowing;