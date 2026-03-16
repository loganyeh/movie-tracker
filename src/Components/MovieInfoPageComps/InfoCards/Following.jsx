

function Following(){

    return(
        <>
            <div className="border h-full w-1/2 flex flex-col justify-center items-start">

                {/* following title */}
                <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Following</div>

                {/* profile card */}
                <div className="border-2 border-red-600 h-auto w-full">
                    <div className="h-12 w-full mb-2 flex justify-between items-center bg-white">
                        <div className="h-full min-w-1/3 max-width-1/2 flex justify-start items-center">
                            <div className="h-10 w-10 flex justify-center items-center">
                                <div className="h-8 w-8 bg-blue-400 rounded"></div>
                            </div>
                            <div className="h-full min-w-14 flex justify-center items-center text-gray-600 font-medium">Rukia</div>
                        </div>
                        <div className="h-full w-1/2 flex justify-center items-center">
                            <div className="h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">Completed</div>
                            <div className="h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">9/10</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Following;