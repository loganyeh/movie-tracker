

function Relations({ data }){

    return(
        <>
            <div className="">
                <div className="text-gray-600 text-lg font-semibold">Relations</div>
                <div className="border border-red-600 flex gap-6">
                    {data?.results?.slice(0, 1)?.map((data, index) => {
                        return <div key={index} className="flex bg-white">
                                    <div className="aspect-[16/9] rounded-l shadow-md bg-center bg-cover shrink-0"
                                    style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/original${data?.poster_path}`})`}}>
                                         
                                    </div>

                                    <div className="p-2.5 bg-white">
                                        <div className="">Source</div>
                                        <div className="">Demon Slayer</div>
                                        <div className="">Manga * Finished</div>
                                    </div>
                                </div>
                    })}
                </div>
                
            </div>
        </>
    )
}

export default Relations;