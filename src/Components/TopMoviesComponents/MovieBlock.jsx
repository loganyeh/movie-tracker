

function MovieBlock({ rankingNumber, movieTitle }){

    return(
        <>
            <div className="h-20 w-full flex mb-8">
                {/* ranking */}
                <div className="h-full w-1/12 flex justify-center items-center text-2xl">{rankingNumber}</div>
                
                {/* poster info */}
                <div className="h-full w-11/12 flex bg-white rounded shadow-md">
                    {/* poster */}
                    <div className="h-full w-1/12 flex justify-center items-center">
                        <div className="border-2 border-red-600 h-11/12 w-1/2 rounded"></div>
                    </div>

                    {/* title and genre */}
                    <div className="h-full w-6/12">
                        <div className="h-1/2 w-full flex justify-start items-end text-lg font-medium">{movieTitle || `Frieren's Beyond Journey ${rankingNumber}`}</div>
                        <div className="h-1/2 w-full flex justify-start items-center">
                            <div className="h-6 w-auto px-4 mr-2 flex justify-center items-center bg-green-300 text-xs font-semibold rounded-xl shadow">adventure</div>
                            <div className="h-6 w-auto px-4 mr-2 flex justify-center items-center bg-green-300 text-xs font-semibold rounded-xl shadow">drama</div>
                            <div className="h-6 w-auto px-4 mr-2 flex justify-center items-center bg-green-300 text-xs font-semibold rounded-xl shadow">fantasy</div>
                        </div>
                    </div>

                    {/* movie stats */}
                    <div className="h-full w-5/12 flex">
                        <div className="h-full w-1/12 flex justify-start items-center">
                            <i className='bx bx-circle text-3xl text-green-500 bg-green-500 rounded-full'></i>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">91%</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">391956 Users</div>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">TV SHOW</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">28 Episodes</div>
                        </div>
                        <div className="h-full w-1/4 mr-8">
                            <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">Fall 2023</div>
                            <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">Finished</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MovieBlock;