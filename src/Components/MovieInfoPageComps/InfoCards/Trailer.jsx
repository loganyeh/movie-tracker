

function Trailer({ data }){

    return(
        <>
            <div className="flex gap-2 flex-col">

                <div className="text-gray-600 font-semibold">Trailer</div>

                <div className="h-56 flex justify-center items-center rounded-xs bg-cover bg-center"
                style={{ backgroundImage: `url(${`https://img.youtube.com/vi/${data?.results[0]?.key}/hqdefault.jpg`})` }}>
                    <i className='bx bx-play-circle text-6xl text-gray-200'></i>
                </div>
                    
            </div>
        </>
    )
}

export default Trailer;