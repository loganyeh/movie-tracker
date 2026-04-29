import type { ReviewData } from "./Review.js";

// type ReviewCardProp = {
//     img?: string;
//     review?: string;
//     likes?: string;
// }

type ReviewCardProp = {
    review: ReviewData;
}

function ReviewCard({ review }: ReviewCardProp){
    
    return(
        <>
            <div className="border border-red-600 flex gap-6">

                <div className="h-12 w-12 bg-blue-400 rounded shrink-0"></div>

                <div className="p-3 flex flex-1 gap-1 flex-col bg-white rounded shadow-md">
                    <div className="text-center text-gray-600 text-sm">
                        {review.review}
                        {/* {review || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"} */}
                        {/* {review || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"} */}
                    </div>

                    <div className="flex justify-end items-center text-xs">
                        <i className='bx bx-like text-gray-500' ></i>
                        <div className=" text-gray-600">{"1197"}</div>
                        {/* <div className=" text-gray-600">{likes || "1197"}</div> */}
                    </div>

                </div>

            </div>
        </>
    )
}

export default ReviewCard;