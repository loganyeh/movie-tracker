import ReviewCard from "./ReviewCard";

function Review(){

    return(
        <>
            <div className="h-full w-1/2 flex flex-col justify-center items-start">

                {/* reviews title */}
                <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Reviews</div>

                {/* REVIEW CARD */}
                <ReviewCard />

            </div>
        </>
    )
}

export default Review;