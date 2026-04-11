

function ThreadCard({ tweet, views, comments, img, username, time, status}){

    return(
        <>
            <div className="px-3 py-4 flex justify-between bg-white rounded shadow-md">

                <div className="flex gap-3 flex-col">
                    <div className="text-sm text-gray-600">{tweet || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"}</div>
                    <div className="flex gap-2.5 items-center">
                        <div className="h-6 w-6 bg-blue-300 rounded"></div>
                        <div className="text-xs">{username || "Rukia"} replied {time || "3 months"} ago</div>
                    </div>
                    <div className="w-fit px-2 py-0.5 bg-blue-400 text-white text-xs font-light rounded-full">{status || "general"}</div>
                </div>
                
                <div className="flex gap-2 items-start shrink-0">
                        <div className="flex gap-1 items-center text-xs">
                            <i className='bx bxs-bar-chart-alt-2 text-gray-500' ></i>
                            <div className="text-gray-400">{views || "120"}</div>
                        </div>
                        <div className="flex gap-1 items-center text-xs">
                            <i className='bx bx-chat text-gray-500' ></i>
                            <div className="text-gray-400">{comments || "3"}</div>
                        </div>
                </div>

            </div>
        </>
    )
}

export default ThreadCard;