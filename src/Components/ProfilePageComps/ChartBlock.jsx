

function ChartBlock({ data, measure, barProgress }){

    return(
        <>
            <div className="bg-white shadow rounded">

                {/* days watched */}
                <div className="border-b border-gray-300 py-5 grid grid-cols-3">
                    {data.map((data, index) => {
                        return <div key={index} className="flex gap-1.5 flex-col items-center">
                                    <div className="text-blue-400 text-sm font-medium">{data.number}</div>
                                    <div className="text-gray-500 text-xs font-medium">{data.subtitle}</div>
                                </div>
                    })}
                </div>

                {/* measure */}
                <div className="pt-2.5 grid grid-cols-3 bg-gray-100">
                    {measure.map((measure, index) => {
                        return <div key={index} className="flex flex-col items-center">
                                        <div className="text-xs text-gray-600">{measure}</div>
                                        <div className="text-[8px] text-gray-400">|</div>
                                </div>
                    })}
                </div>

                {/* bar */}
                <div className="bg-gray-200 rounded-b">
                    <div className={`h-full ${barProgress || "w-1/2"} p-1.5 bg-blue-400 rounded-bl rounded-r`}></div>
                </div>
            </div>
        
        </>
    )
}

export default ChartBlock;