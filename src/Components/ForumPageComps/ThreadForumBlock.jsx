

function ThreadForumBlock({ title }){

    return(
        <>
            <div className="h-auto w-full mt-6">
                {/* header */}
                <div className="h-10 w-full flex justify-between items-center">
                    <div className="h-10 w-auto flex justify-center items-center text-gray-600 font-medium">{title || "Recently Active Threads"}</div>
                    <div className="h-10 w-auto flex justify-center items-center text-gray-500 text-xs font-medium">View All</div>
                </div>

                {/* threads */}
                {Array.from({length: 4}).map((_, index) => {
                    return <div key={index} className="h-auto w-full mb-4 bg-white shadow-md rounded">
                                <div className="h-10 w-full pl-4 flex justify-start items-end text-gray-700 font-normal text-lg">Crunchyroll Release Schedule for Spring 2026 Season</div>
                                <div className="h-10 w-full pl-6 pt-1 flex justify-start items-start text-gray-500 text-sm truncate">Crunchyroll announced on Tuesday that it is streaming the following anime (dub languages streaming at later date in parentheses) for the spring 2026 season: March 28 Agents</div>
                                <div className="h-10 w-full pl-4 flex justify-start items-center">
                                    <div className="h-6 w-6 mr-2 bg-blue-400 rounded"></div>
                                    <div className="text-sm text-gray-700"><span className="text-blue-400">Hanni</span> replied 1 hour ago</div>
                                </div>
                            </div>
                })}
            </div>
        </>
    )
}

export default ThreadForumBlock;