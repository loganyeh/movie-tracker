import Thread from "./Thread";
import Review from "./Review";

function ThreadReview(){

    return(
        <>
            <div className="flex gap-8 flex-col">

                {/* THREAD */}
                <Thread />

                {/* REVIEW */}
                <Review/>

            </div>
        </>
    )
}

export default ThreadReview;