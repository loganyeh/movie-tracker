

function ActiveHistory(){
    const squareColors = ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-gray-200", "bg-gray-200", "bg-gray-200"];

    return(
        <>
            <div className="flex gap-2 flex-col">

                <div className="pl-2 text-gray-600 font-semibold">Active History</div>

                <div className="p-5 grid gap-2.5 grid-cols-23 2xl:grid-cols-27 bg-white shadow-md rounded">
                    {Array.from({length: 161}).map((_, index) => {
                        const randomColor = squareColors[Math.floor(Math.random() * squareColors.length)];
                        return <div key={index} className={`${randomColor} p-1 `}></div>
                    })}
                </div>
            </div>

        </>
    )
}

export default ActiveHistory;