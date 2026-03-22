import Trailer from "./Trailer";
import Following from "./Following";

function TrailerFollowing({ trailerData }){

    return(
        <>
            <div className="h-auto w-11/12 mb-6 flex">

                {/* trailer */}
                <Trailer data={trailerData} />

                {/* Following */}
                <Following />

            </div>
        
        </>
    )
}

export default TrailerFollowing;