

function BarGraphBlock({ data, title, category }){

    return(
        <>
            <div className="h-auto w-full mt-6">

                {/* title and bubble */}
                <div className="2xl:h-14 xl:h-10 w-full flex justify-between items-center">
                    <div className="h-full w-auto flex justify-start items-center text-gray-500 2xl:text-2xl xl:text-xl font-semibold">{title || "Score"}</div>
                    <div className="2xl:h-8 xl:h-6 w-auto px-1 flex justify-around items-center bg-white shadow-md rounded-2xl">
                        <div className="2xl:h-5 xl:h-4 2xl:mx-1 xl:mx-0 px-2 flex justify-center items-center 2xl:text-sm xl:text-xs text-white bg-blue-400 rounded-2xl">Titles Watched</div>
                        <div className="2xl:h-5 xl:h-4 2xl:mx-1 xl:mx-0 px-2 flex justify-center items-center 2xl:text-sm xl:text-xs text-gray-500">Hours Watched</div>
                    </div>
                </div>


                <div className="h-auto w-full bg-white shadow-md rounded">

                    {/* bars */}
                    <div className="border-b border-gray-200 bg-gray-50 h-auto w-full flex justify-center items-center rounded-t">
                        {data?.map((bar, index) => {
                            return <div key={index} className="2xl:h-48 xl:h-40 w-1/5 flex flex-col justify-end items-center">
                                <div className="mb-2 2xl:text-base xl:text-sm text-gray-500">{bar.barY || 1}</div>
                                <div className={`${bar.barHeight} 2xl:w-1/3 xl:w-1/4 bg-blue-400 rounded-t`}></div>
                            </div>
                        })}
                    </div>

                    {/* x axis */}
                    <div className="2xl:h-14 xl:h-12 w-full flex justify-center items-center bg-gray-100 rounded-b">
                        {data?.map((bar, index) => {
                                return <div key={index} className="h-full w-1/5 flex justify-center items-center">
                                    <div className="2xl:text-base xl:text-sm text-gray-600">{bar.barX || 1}</div>
                                </div>
                            })}
                    </div>

                </div>
             </div>
        </>
    )
}

export default BarGraphBlock;