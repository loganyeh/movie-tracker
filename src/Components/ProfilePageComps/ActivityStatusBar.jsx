

function ActivityStatusBar(){

    return(
        <>
            <div className="h-auto w-full mt-4">
                <div className="2xl:h-10 xl:h-8 w-full px-2 flex justify-between items-center 2xl:text-base xl:text-sm text-gray-600 font-semibold">
                    <div>Activity</div>
                    <div className="text-gray-400 font-light flex">
                        <span className="2xl:text-sm xl:text-xs mr-1">Filter</span>
                        <div className="flex justify-center items-center"><i className='bx bx-chevron-down 2xl:text-sm xl:text-xs'></i></div>
                        
                    </div>
                </div>
                <div className="2xl:h-12 xl:h-10 w-full flex justify-start items-center bg-white shadow-md rounded">
                    <div className="h-full w-auto ml-2 flex justify-center items-center 2xl:text-sm xl:text-xs text-gray-400">Write a Status...</div>
                </div>
            </div>
        </>
    )
}

export default ActivityStatusBar;