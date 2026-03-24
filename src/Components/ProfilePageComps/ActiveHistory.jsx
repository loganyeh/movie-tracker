

function ActiveHistory(){
    const squareColors = ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-gray-200", "bg-gray-200", "bg-gray-200"];

    return(
        <>
            <div className="h-auto w-4/5 mt-4">
                <div className="h-10 w-full pl-2 flex justify-start items-center text-md text-gray-600 font-semibold">Active History</div>
                <div className="h-48 w-full flex flex-wrap justify-center items-center bg-white shadow-md rounded">
                    {Array.from({length: 104}).map((_, index) => {
                        const randomColor = squareColors[Math.floor(Math.random() * squareColors.length)];
                        return <div key={index} className={`${randomColor} h-4 w-4 m-1 rounded-md`}></div>
                    })}
                </div>
            </div>

        </>
    )
}

export default ActiveHistory;