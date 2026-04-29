import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard.js";

export type ReviewData = {
    review: string;
}

function Review(){
    const [reviews, setReviews] = useState<ReviewData[]>([]);

    useEffect(() => {
        async function getReviews(){
            const response = await fetch("http://localhost:3000/reviews");
            const data = await response.json();
            setReviews(data);
        }

        getReviews();
    }, [])

    return(
        <>
            <div className="border border-red-600 flex gap-2 flex-col">

                {/* reviews title */}
                <div className="font-semibold text-gray-600">Reviews</div>

                {/* REVIEW CARD */}
                <div className="flex gap-4 flex-col">
                    {reviews.map((review, index) => {
                        return <ReviewCard key={index} review={review} />
                    })}
                    {/* {Array.from({length: 1}).map((_, index) => {
                        return <ReviewCard key={index} />
                    })} */}
                </div>

            </div>
        </>
    )
}

export default Review;