import FilterIconBlock from "./FilterIconBlock";

function WatchStatusBlock(){
    const blockTitles = ["Watching", "Completed", "Paused", "Planning", "Dropped"];


    return(
        <>
            {blockTitles.map((block, index) => {
                return <div key={index} className="flex gap-3 flex-col">
                <div className="flex justify-between">
                    <div className="flex-1 px-3 text-lg font-normal text-gray-600">{block}</div>
                    <div className={`${block === "Watching" ? `` : `hidden`} md:hidden`}><FilterIconBlock /></div>
                </div>

                {/* block body */}
                <div className="p-3.5 md:p-5 flex gap-8 flex-col bg-white shadow rounded">

                    <div className="md:pl-10 flex justify-between text-sm text-gray-700 font-medium">
                        <div className="">Title</div>
                        <div className="md:hidden">Score</div>
                        <div className="md:hidden">Progress</div>
                        <div className="md:hidden">Type</div>


                        <div className="hidden md:flex gap-12 justify-between">
                            <div className="">Score</div>
                            <div className="">Progress</div>
                            <div className="">Type</div>
                        </div>

                    </div>

                    {Array.from({length: 4}).map((_, index) => {
                        return <div key={index} className="flex gap-5 items-start">
                                    <div className="w-10 aspect-square bg-blue-400 rounded"></div>

                                    <div className="flex flex-1 gap-3 flex-col md:flex-row md:justify-between md:items-center">
                                        <div className="text-gray-600 text-sm font-medium">Bleach</div>

                                        <div className="flex md:gap-16 justify-between whitespace-nowrap">
                                            <div className="text-gray-600 text-sm"><span className="md:hidden">Score:</span> 8/10</div>
                                            <div className="text-gray-600 text-sm"><span className="md:hidden">Progress:</span> 20/366</div>
                                            <div className="hidden md:flex text-gray-600 text-sm">TV</div>
                                        </div>
                                    </div>
                                </div>
                    })}

                </div>

            </div>
            })}
        </>
    )
}

export default WatchStatusBlock;