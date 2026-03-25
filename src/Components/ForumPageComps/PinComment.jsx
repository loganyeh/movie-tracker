

function PinComment({ numOfPins }){

    return(
        <>
            <div className="min-h-10 w-full mt-6 pb-2 flex flex-wrap justify-around items-center">
                {Array.from({length: numOfPins || 8}).map((_, index) => {
                    return <div key={index} className="h-auto w-5/12 mb-4 flex justify-between items-center bg-white rounded">

                        {/* tweet */}
                        <div className="h-10 w-auto flex">
                            <div className="h-10 w-10 flex justify-center items-center"><i className='bx bxs-pin text-blue-400 text-2xl' ></i></div>
                            <div className="h-10 w-auto flex justify-start items-center text-sm text-gray-500 font-medium">New User Intro Thread - Welcome!</div>
                        </div>

                        {/* views and comments */}
                        <div className="h-10 w-auto flex mr-2">
                            <div className="h-full w-auto flex mr-4">
                                <div className="h-10 w-auto mr-1 flex justify-center items-center"><i className='bx bx-bar-chart-alt-2 text-gray-500 text-sm' ></i></div>
                                <div className="h-10 flex justify-center items-center text-xs text-gray-500 font-medium">1010239</div>
                            </div>
                            <div className="h-full w-auto flex">
                                <div className="h-10 w-auto mr-1 flex justify-center items-center"><i className='bx bx-chat text-gray-500 text-sm' ></i></div>
                                <div className="h-10 flex justify-center items-center text-xs text-gray-500 font-medium">21354</div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default PinComment;