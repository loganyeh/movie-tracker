
function PieChartBlock({ title, data }){
    const pieChartColor = ["bg-blue-400", "bg-gray-600", "bg-red-400"];

    return(
        <>
            {Array.from({length: 1}).map((_, index) => {
                return <div key={index} className="p-4 flex gap-6 flex-col bg-gray-50 shadow-md rounded">

                            <div className="text-gray-600 font-semibold">{title || "Format Distribution"}</div>

                            <div className="flex gap-6 flex-col md:flex-row xl:flex-col 2xl:flex-row">
                                <div className="text-center">
                                    <i className='bx bx-pie-chart-alt-2 text-[96px]' ></i>
                                </div>
                                    
                                <div className="flex gap-2.5 flex-col md:w-full">
                                    {data.map((data, index) => {
                                        return <div key={index} className={`pl-2 flex justify-between items-center ${pieChartColor[index]} text-xs rounded`}>
                                                    <div className="font-normal text-white">{data.category}</div>
                                                    <div className="w-12 py-1.5 text-center font-semibold bg-white/50 text-gray-700 rounded">{data.percentage}%</div>
                                                </div>
                                    })}
                                </div>

                            </div>

                        </div>
            })}

        </>
    )
}

export default PieChartBlock;