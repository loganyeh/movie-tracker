

function Trailer(){

    return(
        <>
            <div className="h-full w-1/2 flex flex-col justify-center items-start">

                <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold rounded">Trailer</div>
                <div className="h-64 w-11/12 flex justify-center items-center bg-blue-300 rounded">
                    <div className="h-auto w-auto flex justify-center items-center">
                        <i className='bx bx-play-circle text-6xl hover:text-red-500 cursor-pointer'></i>
                    </div>
                </div>
                    
            </div>
        </>
    )
}

export default Trailer;