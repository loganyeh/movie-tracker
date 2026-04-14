

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
            <div className="flex gap-2 flex-col">

                {/* distribution title */}
                <div className="text-gray-600 font-semibold">Score Distribution</div>

                {/* color icons */}
                <div className="p-4 flex justify-between items-end bg-white rounded shadow-md">
                    {/* Score Color Bar */}
                    {scoreData.map((score, index) => {
                        return <div key={index} className={`${score.height} ${score.width} ${score.bgColor} rounded-full`}></div>
                    })}
                </div>

            </div>
        </>
    )
}

export default Score;