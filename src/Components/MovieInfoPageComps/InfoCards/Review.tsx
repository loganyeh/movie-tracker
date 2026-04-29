import ReviewCard from "./ReviewCard.js";

function Review(){

    return(
        <>
            <div className="border border-red-600 flex gap-2 flex-col">

                {/* reviews title */}
                <div className="font-semibold text-gray-600">Reviews</div>

                {/* REVIEW CARD */}
                <div className="flex gap-4 flex-col">
                    {Array.from({length: 2}).map((_, index) => {
                        return <ReviewCard key={index} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Review;