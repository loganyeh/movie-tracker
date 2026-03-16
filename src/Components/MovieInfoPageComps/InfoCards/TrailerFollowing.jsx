import Trailer from "./Trailer";
import Following from "./Following";

function TrailerFollowing(){

    return(
        <>
            <div className="h-auto w-11/12 mb-6 flex">

                {/* trailer */}
                <Trailer />

                {/* Following */}
                <Following />

            </div>
        
        </>
    )
}

export default TrailerFollowing;