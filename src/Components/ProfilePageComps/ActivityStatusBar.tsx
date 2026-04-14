

function ActivityStatusBar(){

    return(
        <>
            <div className="flex gap-1.5 flex-col">

                <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600 font-semibold">Activity</div>

                    <div className="flex gap-1 items-center text-gray-400">
                        <div className="text-xs font-light">Filter</div>
                        <i className='bx bx-chevron-down'></i>
                        
                    </div>
                </div>

                <div className="p-2 bg-white shadow-md rounded text-sm text-gray-400">Write a Status..</div>

            </div>
        </>
    )
}

export default ActivityStatusBar;