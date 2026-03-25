

function StatIconsBlock({ data }){

    return(
        <>
            <div className="h-36 w-full mt-6 flex justify-center items-center">
                {data.map((stat, index) => {
                    return <div key={index} className="h-full w-1/6 flex">
                                <div className="h-full w-2/5 flex justify-center items-center">
                                    <div className="h-12 w-12 flex justify-center items-center bg-white shadow-md rounded-full"><i className= {`${stat.icon} text-3xl text-gray-400`}></i></div>
                                </div>
                                <div className="h-full w-3/5">
                                    <div className="h-1/2 w-full flex justify-start items-end text-2xl text-blue-400 font-semibold">{stat.number || "75"}</div>
                                    <div className="h-1/2 w-full flex justify-start items-start text-sm text-gray-500 font-medium">{stat.category || "Total Anime"}</div>
                                </div>
                            </div>
                })}
            </div>
        </>
    )
}

export default StatIconsBlock;