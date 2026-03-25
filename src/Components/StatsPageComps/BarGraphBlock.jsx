

function BarGraphBlock({ data, title, category }){

    return(
        <>
            <div className="h-auto w-full mt-6">

                {/* title and bubble */}
                <div className="h-14 w-full flex justify-between items-center">
                    <div className="h-full w-auto flex justify-start items-center text-gray-500 text-2xl font-semibold">{title || "Score"}</div>
                    <div className="h-8 w-auto px-2 flex justify-around items-center bg-white shadow-md rounded-2xl">
                        <div className="h-5 mx-2 px-3 flex justify-center items-center text-sm text-white bg-blue-400 rounded-2xl">Titles Watched</div>
                        <div className="h-5 mx-2 px-3 flex justify-center items-center text-sm text-gray-500">Hours Watched</div>
                    </div>
                </div>


                <div className="h-auto w-full bg-white shadow-md rounded">

                    {/* bars */}
                    <div className="border-b border-gray-200 bg-gray-50 h-auto w-full flex justify-center items-center rounded-t">
                        {data?.map((bar, index) => {
                            return <div key={index} className="h-48 w-1/5 flex flex-col justify-end items-center">
                                <div className="mb-2 text-gray-500">{bar.barY || 1}</div>
                                <div className={`${bar.barHeight} w-1/3 bg-blue-400 rounded-t`}></div>
                            </div>
                        })}
                    </div>

                    {/* x axis */}
                    <div className="h-14 w-full flex justify-center items-center bg-gray-100 rounded-b">
                        {data?.map((bar, index) => {
                                return <div key={index} className="border-red-600 h-full w-1/5 flex justify-center items-center">
                                    <div className="text-gray-600">{bar.barX || 1}</div>
                                </div>
                            })}
                    </div>

                </div>
             </div>
        </>
    )
}

export default BarGraphBlock;