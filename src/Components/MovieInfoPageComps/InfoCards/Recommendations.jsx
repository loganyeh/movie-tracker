

function Recommendations({ data }){

    return(
        <>
            <div className="h-auto w-11/12 mb-6">

                <div className="h-10 w-full flex justify-start items-center text-gray-600 text-lg font-semibold">
                    <div className="h-full w-1/2 flex justify-start items-center">Recommendations</div>
                    <div className="h-full w-1/2 flex justify-end items-center">
                        <div className="h-full w-full flex justify-end items-center">
                            <div className="h-full w-auto 2xl:mr-4 xl:mr-2 flex justify-center items-center font-medium text-xs">+Add</div>
                            <div className="h-full w-auto flex justify-center items-center font-medium text-xs">View All Recommendations</div>
                        </div>
                    </div>
                </div>

                {/* movie poster # 1 */}
                <div className="min-h-auto w-full flex flex-wrap justify-start items-start">
                    {data?.results?.slice(7, 12).map((data, index) => {
                        return <div key={index} className="min-h-48 w-36 mr-8">
                                    <div className="h-48 w-full mr-12 bg-blue-300 rounded shadow-md"
                                        style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    ></div>
                                    <div className="h-auto w-full mt-1 flex justify-start items-center text-sm text-gray-600 font-semibold">{data?.title || "JJK"}</div>
                                </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Recommendations;