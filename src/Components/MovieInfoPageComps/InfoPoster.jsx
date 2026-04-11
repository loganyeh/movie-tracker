

function InfoPoster({ data }){

    return(
        <>
            <div className="px-6 pt-2.5 flex justify-between">

                <div className="relative w-full flex gap-4 justify-end">
                    <div className="absolute left-0 bottom-0 h-36 w-24 bg-cover bg-center rounded-sm"
                    style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${data?.poster_path}`})`}}>
                    </div>
                    <div className="px-12 py-1.5 text-gray-100 text-sm font-light bg-blue-400 rounded">Completed</div>
                    <i className='bx bxs-heart p-1.5 text-white bg-red-600 text-xl rounded'></i>
                </div>




                {/* <div className="h-auto w-1/2 2xl:-mt-36 xl:-mt-24 bg-gray-400 rounded">
                    <img className="shadow-md rounded" src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="" />
                </div> */}

                {/* <div className="h-14 w-1/2 mt-2 flex justify-around items-start">
                    <div className="h-2/3 w-auto flex justify-center items-center text-gray-100">
                        <span className="2xl:h-full xl:h-10/12 2xl:w-32 xl:w-24 flex justify-center items-center 2xl:text-sm xl:text-xs bg-blue-400 rounded-l">Add to List</span>
                        <div className="2xl:h-full xl:h-10/12 2xl:w-10 xl:w-8 flex justify-center items-center bg-blue-300 rounded-r"><i className='bx bx-chevron-down 2xl:text-2xl xl:text-xl' ></i></div>
                    </div>
                    <div className="h-2/3 2xl:w-10 xl:w-8 flex justify-center items-center">
                        <div className="2xl:h-full xl:h-10/12 w-full flex justify-center items-center bg-red-600 rounded"><i className='bx bxs-heart text-white 2xl:text-2xl xl:text-xl'></i></div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default InfoPoster;