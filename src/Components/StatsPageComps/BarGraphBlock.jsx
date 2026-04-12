

function BarGraphBlock({ data, title, category }){

    return(
        <>
            <div className="flex gap-4 flex-col">

                {/* title and bubble */}
                <div className="flex gap-3 flex-col xl:flex-row xl:justify-between">

                    <div className="text-lg text-gray-500 font-semibold">{title || "Score"}</div>

                    <div className="w-fit px-2 py-1 flex gap-2 items-center text-xs bg-white shadow-md rounded-full">
                        <div className="px-2 py-0.5 text-white bg-blue-400 rounded-full">Titles Watched</div>
                        <div className="text-gray-500">Hours Watched</div>
                    </div>

                </div>

                <div className="bg-white shadow-md rounded">
                    {/* bars */}
                    <div className="border-b border-gray-300 h-44 grid grid-cols-6 bg-gray-50 rounded-t">
                        {data?.map((bar, index) => {
                            return <div key={index} className="flex gap-1 flex-col justify-end items-center">
                                <div className="text-sm text-gray-500">{bar.barY || 1}</div>
                                <div className={`${bar.barHeight} p-3 bg-blue-400 rounded-t`}></div>
                            </div>
                        })}
                    </div>

                    {/* x axis */}
                    <div className="grid grid-cols-6 bg-gray-100 rounded-b">
                        {data?.map((bar, index) => {
                                return <div key={index} className="py-3.5 text-center text-sm font-medium text-gray-500">{bar.barX || 1}
                                    {/* <div className="text-gray-600">{bar.barX || 1}</div> */}
                                </div>
                            })}
                    </div>

                </div>
             </div>
        </>
    )
}

export default BarGraphBlock;