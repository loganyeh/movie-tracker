

function ReviewCard({ img, review, likes }){

    return(
        <>
            <div className="h-auto w-full mb-6 flex justify-between items-center">
                <div className="h-16 w-16 bg-blue-400 rounded"></div>
                <div className="h-auto w-5/6 flex bg-white rounded shadow-md">
                    <div className="min-h-20 w-5/6 p-2 flex justify-center items-center text-gray-600">{review || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"}</div>
                    <div className="bmin-h-20 w-1/6">
                        <div className="h-full w-full flex justify-center items-end">
                            <div className="h-10 w-1/3 flex justify-center items-center"><i className='bx bx-like' ></i></div>
                            <div className="h-10 w-2/3 pl-2 flex justify-start items-center">{likes || "1197"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard;