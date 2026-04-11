import Thread from "./Thread";
import Review from "./Review";

function ThreadReview(){

    return(
        <>
            <div className="flex gap-8 flex-col xl:grid xl:grid-cols-2 xl:gap-x-8">

                {/* THREAD */}
                <Thread />

                {/* REVIEW */}
                <Review/>

            </div>
        </>
    )
}

export default ThreadReview;