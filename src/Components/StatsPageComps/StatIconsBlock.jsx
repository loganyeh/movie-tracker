

function StatIconsBlock({ data }){

    return(
        <>
            <div className="2xl:h-36 xl:h-auto w-full mt-6 xl:flex 2xl:justify-center 2xl:items-center xl:flex-wrap">
                {data.map((stat, index) => {
                    return <div key={index} className="2xl:h-full xl:h-28 2xl:w-1/6 xl:w-1/3 flex">
                                <div className="h-full w-2/5 2xl:pr-0 xl:pr-4 flex 2xl:justify-center xl:justify-end items-center">
                                    <div className="2xl:h-12 2xl:w-12 xl:h-10 xl:w-10 flex justify-center items-center bg-white shadow-md rounded-full"><i className= {`${stat.icon} 2xl:text-3xl xl:text-xl text-gray-400`}></i></div>
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