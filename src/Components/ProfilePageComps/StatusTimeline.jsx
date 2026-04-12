

function StatusTimeline({ length }){

    return(
        <>
            <div className="flex gap-5 flex-col 2xl:grid 2xl:gap-8 2xl:grid-cols-2">
                {Array.from({length: (length || 6)}).map((_, index) => {
                    return <div key={index} className="flex justify-between bg-white shadow rounded">
                                
                                <div className="w-14 aspect-[3/4] bg-blue-300 rounded-l"></div>

                                <div className="flex-1 p-2.5 flex justify-between">
                                    <div className="text-sm font-normal flex items-center">
                                        <span className="text-gray-600 tracking-wide">Read Chapter 229-230 of <span className="text-blue-400">Chainsaw Man</span></span>
                                    </div>

                                    <div className="flex flex-col justify-between">
                                        <div className="text-xs text-gray-500 whitespace-nowrap">2 Weeks Ago</div>

                                        <div className="flex gap-2 justify-end">
                                            <i className='bx bxs-chat text-sm text-gray-400' ></i>
                                            <i className='bx bxs-heart text-sm text-gray-400' ></i>
                                        </div>

                                    </div>
                                </div>

                            </div>
                })}

            </div>
        </>
    )
}

export default StatusTimeline;