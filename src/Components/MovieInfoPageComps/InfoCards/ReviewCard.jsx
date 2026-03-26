

function ReviewCard({ img, review, likes }){

    return(
        <>
            <div className="h-auto w-full mb-6 flex justify-around items-center">
                <div className="2xl:h-16 2xl:w-16 xl:h-14 xl:w-14 bg-blue-400 rounded"></div>
                <div className="h-auto w-5/6 flex bg-white rounded shadow-md">
                    <div className="min-h-20 w-5/6 p-2 flex justify-center items-center 2xl:text-base xl:text-sm text-gray-600">{review || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"}</div>
                    <div className="min-h-20 w-1/6">
                        <div className="h-full w-full flex justify-center items-end">
                            <div className="h-10 w-1/3 flex justify-center items-center"><i className='bx bx-like 2xl:text-base xl:text-sm text-gray-500' ></i></div>
                            <div className="h-10 w-2/3 pl-2 flex justify-start items-center 2xl:text-base xl:text-sm text-gray-600">{likes || "1197"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard;