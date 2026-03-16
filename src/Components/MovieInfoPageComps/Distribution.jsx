import Status from "./InfoCards/Status";
import Score from "./InfoCards/Score";

function Distribution(){

    return(
        <>
            <div className="h-auto w-11/12 mb-6 flex">

                {/* STATUS BLOCK */}
                <Status />

                {/* SCORE BLOCK*/}
                <Score />

            </div>
        </>
    )
}

export default Distribution;