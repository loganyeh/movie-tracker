

function Relations({ data }){

    // console.log(data);

    return(
        <>
            <div className="min-h-40 w-11/12 mb-6">
                <div className="h-10 flex justify-start items-center text-gray-600 text-lg font-semibold">Relations</div>
                {/* <div className="h-40 w-full flex justify-start items-center">
                    <div className="border border-black h-full w-32 mr-12 rounded shadow-md"></div>
                </div> */}
                {data.map((data, index) => {
                    return <div key={index} className="h-40 w-full flex justify-start items-center">
                                <div className="border border-black h-full w-32 mr-12 rounded shadow-md">
                                    <img src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt="" />
                                </div>
                            </div>
                })}
            </div>
        </>
    )
}

export default Relations;