

function ThreadForumBlock(){

    const threadsData = ["Recently Active Threads", "Release Discussion Threads", "Newly Created Threads"];

    return(
        <>
            {threadsData.map((thread, index) => {
                return <div key={index} className="flex gap-3 flex-col">

                {/* header */}
                <div className="flex justify-between items-center">
                    <div className="text-gray-600 font-medium">{thread || "Recently Active Threads"}</div>
                    <div className="hidden md:flex text-gray-500 text-xs font-medium">View All</div>
                </div>

                {/* threads */}
                <div className="flex gap-6 flex-col">
                    {Array.from({length: 3}).map((_, index) => {
                        return <div key={index} className="p-3 flex gap-4 flex-col bg-white shadow-md rounded">
                                    <div className="text-gray-700 font-normal">Crunchyroll Release Schedule for Spring 2026 Season</div>
                                    <div className="text-gray-500 text-sm">Crunchyroll announced on Tuesday that it is streaming the following anime (dub languages streaming at later date in parentheses) for the spring 2026 season: March 28 Agents</div>
                                    <div className="flex gap-2 justify-start items-center">
                                        <div className="w-6 aspect-square bg-blue-400 rounded"></div>
                                        <div className="text-sm text-gray-700"><span className="text-blue-400">Hanni</span> replied 1 hour ago</div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
            })}
        </>
    )
}

export default ThreadForumBlock;