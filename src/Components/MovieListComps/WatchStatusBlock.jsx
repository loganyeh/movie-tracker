

function WatchStatusBlock({ blockTitle }){

    return(
        <>
            <div className="h-auto w-full mt-8">
                <div className="h-12 w-full pl-6 flex justify-start items-center text-xl font-normal text-gray-600">{blockTitle}</div>

                {/* block body */}
                <div className="min-h-10 w-full 2xl:p-0 xl:p-1 bg-white shadow rounded">
                    <div className="h-10 w-full flex justify-center items-center">
                        <div className="h-full w-6/12 pl-16 flex justify-start items-center text-gray-700 font-medium">Title</div>
                        <div className="h-full w-2/12 flex justify-center items-center text-gray-700 font-medium">Score</div>
                        <div className="h-full w-2/12 flex justify-center items-center text-gray-700 font-medium">Progress</div>
                        <div className="h-full w-2/12 flex justify-center items-center text-gray-700 font-medium">Type</div>
                    </div>
                    
                    {Array.from({length: 4}).map((_, index) => {
                        return <div key={index} className="h-14 w-full flex">
                                    <div className="h-full w-6/12 flex justify-start items-center">
                                        <div className="h-10 w-10 ml-2 bg-blue-400 rounded"></div>
                                        <div className="ml-2 text-gray-600 text-sm font-light">Bleach</div>
                                    </div>
                                    <div className="h-full w-2/12 flex justify-center items-center text-gray-600 text-sm">8/10</div>
                                    <div className="h-full w-2/12 flex justify-center items-center text-gray-600 text-sm">20/366</div>
                                    <div className="h-full w-2/12 flex justify-center items-center text-gray-600 text-sm">TV</div>
                                </div>
                    })}
                </div>


            </div>
        
        </>
    )
}

export default WatchStatusBlock;