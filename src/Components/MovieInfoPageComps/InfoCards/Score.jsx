

function Score(){

    const scoreData = [
        {height: "h-5", width: "w-5", bgColor:"bg-red-500"},
        {height: "h-5", width: "w-5", bgColor:"bg-orange-700"},
        {height: "h-5", width: "w-5", bgColor:"bg-orange-500"},
        {height: "h-5", width: "w-5", bgColor:"bg-yellow-500"},
        {height: "h-5", width: "w-5", bgColor:"bg-yellow-500"},
        {height: "h-7", width: "w-5", bgColor:"bg-yellow-500"},
        {height: "h-10", width: "w-5", bgColor:"bg-green-500"},
        {height: "h-14", width: "w-5", bgColor:"bg-green-500"},
        {height: "h-20", width: "w-5", bgColor:"bg-green-500"},
        {height: "h-12", width: "w-5", bgColor:"bg-green-500"},
    ]

    return(
        <>
            <div className="h-full w-1/2 flex flex-col justify-center items-start">

                {/* distribution title */}
                <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Score Distribution</div>

                {/* color icons */}
                <div className="h-26 w-11/12 flex justify-around items-center bg-white rounded shadow-md">
                    {/* Score Color Bar */}
                    {scoreData.map((score, index) => {
                        return <div key={index} className="h-full w-1/12 pb-2 flex justify-center items-end">
                                    <div className={`${score.height} ${score.width} ${score.bgColor} rounded-full`}></div>
                                </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default Score;