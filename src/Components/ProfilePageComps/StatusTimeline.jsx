

function StatusTimeline({ length }){

    return(
        <>
            <div className="h-auto w-full mt-4">
                <div className="h-auto w-full flex flex-wrap justify-between items-center">
                    {Array.from({length: (length || 6)}).map((_, index) => {
                        return <div key={index} className="min-h-14 2xl:w-96 xl:w-full mb-4 flex justify-between items-center bg-white shadow-md rounded">
                                    <div className="h-auto w-auto flex">
                                        <div className="h-18 w-14 bg-blue-300 rounded-l"></div>
                                        <div className="min-h-18 2xl:w-56 xl:w-auto pl-2 flex justify-center items-center text-sm font-normal">
                                            <span>Read Chapter 229-230 of <span className="text-blue-400">Chainsaw Man</span></span>
                                        </div>
                                    </div>
                                    <div className="h-18 w-24">
                                        <div className="h-1/2 w-full flex justify-center items-center text-xs text-gray-500 whitespace-nowrap">2 Weeks Ago</div>
                                        <div className="h-1/2 w-full flex justify-end items-center">
                                            <div className="h-full w-1/4 flex justify-center items-center text-gray-400"><i className='bx bxs-chat text-xl' ></i></div>
                                            <div className="h-full w-1/4 flex justify-center items-center text-gray-400"><i className='bx bxs-heart text-xl' ></i></div>
                                        </div>
                                    </div>
                                </div>
                    })}

                </div>
            </div>
        
        </>
    )
}

export default StatusTimeline;