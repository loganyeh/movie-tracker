

function ThreadCard({ tweet, views, comments, img, username, time, status}){

    return(
        <>
            <div className="h-auto w-full flex mb-6 bg-white rounded shadow-md">
                <div className="min-h-32 w-4/5">
                    <div className="min-h-2/3 w-full p-2 flex justify-center items-center 2xl:text-base xl:text-sm">
                        {tweet || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"}
                    </div>
                    <div className="h-10 w-full flex justify-start items-center">
                        <div className="2xl:h-8 2xl:w-8 xl:h-6 xl:w-6 2xl:mx-3 xl:mx-2 bg-blue-300 rounded"></div>
                        <div className="h-full w-auto flex justify-center items-center 2xl:text-base xl:text-sm">{username || "Rukia"} replied {time || "3 months"} ago</div>
                    </div>
                </div>
                <div className="min-h-32 w-1/5 flex flex-col justify-between items-center">
                    <div className="h-16 w-full">
                        <div className="h-full w-full flex justify-around items-center">
                            <div className="h-auto w-auto flex justify-center items-center">
                                <i className='bx bxs-bar-chart-alt-2 2xl:mr-1 xl:mr-0 2xl:text-2xl xl:text-base text-gray-400' ></i>
                                <span className="2xl:text-base xl:text-xs text-gray-400">{views || "120"}</span>
                            </div>
                            <div className="h-auto w-auto flex justify-center items-center">
                                <i className='bx bx-chat 2xl:mr-1 xl:mr-0 2xl:text-2xl xl:text-base text-gray-500' ></i>
                                <span className="2xl:text-base xl:text-xs text-gray-400">{comments || "3"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-16 w-full flex justify-center items-center">
                        <div className="2xl:h-2/5 xl:h-5 w-auto 2xl:px-2 xl:px-1 flex justify-center items-center bg-blue-400 text-white 2xl:text-sm xl:text-xs font-normal rounded-xl">{status || "general"}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreadCard;