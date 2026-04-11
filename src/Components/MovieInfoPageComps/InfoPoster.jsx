

function InfoPoster({ data }){

    return(
        <>
                <div className="px-6 py-1.5 flex gap-4 md:flex-col justify-center items-center">
                    <div className="w-24 -mt-20 aspect-[3/4] bg-cover bg-center rounded-sm"
                    style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${data?.poster_path}`})`}}>
                    </div>

                    <div className="flex gap-4 flex-1 items-center">
                        <div className="border flex flex-1 justify-center py-1.5 text-gray-100 text-sm font-light bg-blue-400 rounded">Completed</div>
                        <i className='bx bxs-heart p-1.5 text-white bg-red-600 text-xl rounded'></i>
                    </div>
                </div>
        </>
    )
}

export default InfoPoster;