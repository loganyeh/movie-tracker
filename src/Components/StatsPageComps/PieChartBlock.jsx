
function PieChartBlock(){
    const pieChartColor = ["bg-blue-400", "bg-gray-600", "bg-red-400"];

    const pieData = [
        {title: "Format Distribution", data: [
            {category: "TV", percentage: "68"},
            {category: "Movie", percentage: "11"},
            {category: "OVA", percentage: "10"},
        ]},
        {title: "Statuts Distribution", data: [
            {category: "Planning", percentage: "68"},
            {category: "Completed", percentage: "24"},
            {category: "Paused", percentage: "5"},
        ]},
        {title: "Country Distribution", data: [
            {category: "Japan", percentage: "96"},
            {category: "China", percentage: "3"},
            {category: "South Korea", percentage: "1"},
        ]},
    ]

    return(
        <>
            {pieData.map((pie, index) => {
                return <div key={index} className="p-4 flex gap-6 flex-col bg-gray-50 shadow-md rounded">

                            <div className="text-gray-600 font-semibold">{pie.title || "Format Distribution"}</div>

                            <div className="flex gap-6 flex-col md:flex-row xl:flex-col 2xl:flex-row">
                                <div className="text-center">
                                    <i className='bx bx-pie-chart-alt-2 text-[96px]' ></i>
                                </div>
                                    
                                <div className="flex gap-2.5 flex-col md:w-full">
                                    {pie.data.map((data, index) => {
                                        return <div key={index} className={`pl-2 flex justify-between items-center ${pieChartColor[index]} text-xs rounded`}>
                                                    <div className="font-normal text-white">{data.category || "fasf"}</div>
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