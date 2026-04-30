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

    function onClickReview(){
        console.log("Clicked Create a review");
        
    }

    return(
        <>
            <div className="border border-red-600 flex gap-2 flex-col">

                {/* reviews title */}
                <div className="flex justify-between items-center text-gray-600">
                    <div className="font-semibold">Reviews</div>
                    <div onClick={() => onClickReview()} className="text-xs font-light cursor-pointer hover:text-gray-400">Create new review</div>
                    {/* left off here to create POST request to add a review */}
                </div>

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