import Status from "./InfoCards/Status";
import Score from "./InfoCards/Score";

function Distribution(){

    return(
        <>
            <div className="flex gap-8 flex-col">

                {/* STATUS BLOCK */}
                <Status />

                {/* SCORE BLOCK*/}
                <Score />

            </div>
        </>
    )
}

export default Distribution;