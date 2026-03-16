

function Recommendations({ img, title }){

    return(
        <>
            <div className="min-h-40 w-11/12 mb-6">
                <div className="h-10 flex justify-start items-center text-gray-600 text-lg font-semibold">
                    <div className="h-full w-1/2 flex justify-start items-center">Recommendations</div>
                    <div className="h-full w-1/2 flex justify-end items-center">
                        <div className="h-full w-1/3 flex justify-between items-center">
                            <div className="h-full w-auto flex justify-center items-center font-medium text-xs">+Add</div>
                            <div className="h-full w-auto flex justify-center items-center font-medium text-xs">View All Recommendations</div>
                        </div>
                    </div>
                </div>
                {/* movie poster # 1 */}
                <div className="min-h-40 w-full flex flex-wrap justify-start items-center">
                    <div className="min-h-48 w-36 mr-8">
                        <div className="h-48 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                        <div className="h-10 w-full flex justify-start items-center text-sm text-gray-600 font-semibold">{title || "JJK"}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommendations;