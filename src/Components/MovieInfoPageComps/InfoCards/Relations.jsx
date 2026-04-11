

function Relations({ data }){

    return(
        <>
            <div className="w-full">
                <div className="border text-gray-600 text-lg font-semibold">Relations</div>
                <div className="border border-red-600 w-full flex gap-6">
                    {data?.results?.slice(0, 1)?.map((data, index) => {
                        return <div key={index} className="flex">
                                    <div className="w-20 aspect-[2/3] rounded-l shadow-md bg-center bg-cover shrink-0"
                                    style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/original${data?.poster_path}`})`}}>
                                         
                                    </div>

                                    <div className="border min-w-56 p-2.5 flex flex-col bg-white">
                                        <div className="border">Source</div>
                                        <div className="border">Demon Slayer</div>
                                        <div className="border">Manga * Finished</div>
                                    </div>
                                </div>
                    })}
                </div>
                
            </div>
        </>
    )
}

export default Relations;