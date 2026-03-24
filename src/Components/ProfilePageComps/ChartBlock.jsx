

function ChartBlock({ data, measure, barProgress }){

    return(
        <>
            <div className="h-auto w-96 bg-white shadow-md rounded">
                {/* days watched */}
                <div className="border-b border-gray-300 h-24 w-full flex">
                    {data.map((data, index) => {
                        return <div key={index} className="h-full w-1/3 flex flex-col justify-center items-center">
                                    <div className="h-1/2 w-full flex justify-center items-end text-lg text-blue-400 font-medium">{data.number}</div>
                                    <div className="h-1/2 w-full flex justify-center items-start text-sm text-gray-500 font-medium">{data.subtitle}</div>
                                </div>
                    })}
                </div>

                {/* measure */}
                <div className="h-10 w-full flex bg-gray-100">
                    {measure.map((measure, index) => {
                        return <div key={index} className="h-full w-1/3 flex flex-col justify-end items-start">
                                    <div className="h-1/3 w-full flex justify-center items-center">
                                        <div className="text-sm text-gray-600">{measure}</div>
                                    </div>
                                    <div className="h-1/3 w-full mt-1">
                                        <div className="border-r border-gray-400 h-full w-1/2"></div>
                                    </div>
                                </div>
                    })}
                </div>

                {/* bar */}
                <div className="h-2 w-full flex bg-gray-200 rounded-b">
                    <div className={`h-full ${barProgress || "w-1/2"} bg-blue-400 rounded-bl rounded-r`}></div>
                </div>
            </div>
        
        </>
    )
}

export default ChartBlock;