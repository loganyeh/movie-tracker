import ReviewCard from "./ReviewCard.js";

function Review(){

    return(
        <>
            <div className="flex gap-2 flex-col">

                {/* reviews title */}
                <div className="flex justify-between items-center text-gray-600">
                    <div className="font-semibold">Reviews</div>
                    <div className="text-xs font-light cursor-pointer hover:text-gray-400">Create new review</div>
                </div>

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