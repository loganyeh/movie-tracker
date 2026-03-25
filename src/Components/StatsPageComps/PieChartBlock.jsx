import PieChart from "./PieChart";

function PieChartBlock({ title, data }){

    const pieChartColor = ["bg-blue-400", "bg-gray-600", "bg-red-400"];

    return(
        <>
            {/* <div className="border border-purple-600 h-auto w-full mt-20 flex justify-around items-center"> */}
            {Array.from({length: 1}).map((_, index) => {
                return <div key={index} className="h-auto w-80 flex flex-col justify-start items-center bg-gray-50 shadow-md rounded">
                    <div className="h-8 w-full pl-4 flex justify-start items-end text-gray-600 font-semibold">{title || "Format Distribution"}</div>
                    <div className="h-40 w-full flex">
                        <div className="h-40 w-5/12 flex justify-center items-center"><i className='bx bx-pie-chart-alt-2 text-7xl' ></i></div>
                        <div className="h-40 w-7/12 flex flex-col justify-center items-center">
                            {data.map((data, index) => {
                                return <div key={index} className={`h-6 w-11/12 m-1 flex justify-between items-center bg-blue-400 ${pieChartColor[index]} rounded-md`}>
                                            <div className="h-full w-auto pl-2 flex justify-center items-center text-sm font-normal text-white">{data.category}</div>
                                            <div className="h-full w-10 flex justify-center items-center px-2 text-sm font-semibold bg-white text-gray-700 opacity-70 rounded">{data.percentage}%</div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            })}

            {/* </div> */}
        </>
    )
}

export default PieChartBlock;