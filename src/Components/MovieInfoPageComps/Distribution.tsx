import Status from "./InfoCards/Status.js";
import Score from "./InfoCards/Score.js";

function Distribution(){

    return(
        <>
            <div className="flex gap-8 flex-col xl:grid xl:grid-cols-2 xl:gap-x-8">

                {/* STATUS BLOCK */}
                <Status />

                {/* SCORE BLOCK*/}
                <Score />

            </div>
        </>
    )
}

export default Distribution;