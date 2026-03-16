import Thread from "./Thread";
import Review from "./Review";

function ThreadReview(){

    return(
        <>
            <div className="h-auto w-11/12 mb-6 flex">

                {/* THREAD */}
                <Thread />

                {/* REVIEW */}
                <Review/>

            </div>
        </>
    )
}

export default ThreadReview;