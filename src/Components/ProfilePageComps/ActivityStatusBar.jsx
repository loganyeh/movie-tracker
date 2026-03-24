

function ActivityStatusBar(){

    return(
        <>
            <div className="h-auto w-full mt-4">
                <div className="h-10 w-full px-2 flex justify-between items-center text-md text-gray-600 font-semibold">
                    <div>Activity</div>
                    <div className="text-sm text-gray-400 font-light flex">
                        <span className="mr-1">Filter</span>
                        <div className="flex justify-center items-center"><i className='bx bx-chevron-down'></i></div>
                        
                    </div>
                </div>
                <div className="h-12 w-full flex justify-start items-center bg-white shadow-md rounded">
                    <div className="h-full w-auto ml-2 flex justify-center items-center text-sm text-gray-400">Write a Status...</div>
                </div>
            </div>
        </>
    )
}

export default ActivityStatusBar;