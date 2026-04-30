type ReviewCardProp = {
    review?: string;
}

function ReviewCard({ review }: ReviewCardProp){
    
    return(
        <>
            <div className="flex gap-6">

                <div className="h-12 w-12 bg-blue-400 rounded shrink-0"></div>

                <div className="p-3 flex flex-1 gap-1 flex-col bg-white rounded shadow-md">
                    <div className="text-center text-gray-600 text-sm">
                        {review || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"}
                    </div>

                    <div className="flex justify-end items-center text-xs">
                        <i className='bx bx-like text-gray-500' ></i>
                        <div className=" text-gray-600">{"1197"}</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ReviewCard;