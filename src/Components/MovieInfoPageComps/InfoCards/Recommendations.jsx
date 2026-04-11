

function Recommendations({ data }){

    return(
        <>
            <div className="flex gap-2 flex-col">

                <div className="flex justify-between items-center text-gray-600">
                    <div className="font-semibold">Recommendations</div>
                    <div className="text-2xl">+</div>
                </div>

                {/* movie poster # 1 */}
                <div className="flex gap-6 md:grid md:grid-cols-3 overflow-x-auto scroll-smooth md:overflow-x-hidden">
                    {data?.results?.slice(7, 12).map((data, index) => {
                        return <div key={index} className="flex gap-2 flex-col">
                                    <div className="w-36 aspect-[3/4] bg-blue-300 rounded shadow-md bg-cover bg-center shrink-0"
                                        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`}}>
                                    </div>
                                    <div className="py-1 text-sm text-gray-600 font-semibold">{data?.title || "JJK"}</div>
                                </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Recommendations;