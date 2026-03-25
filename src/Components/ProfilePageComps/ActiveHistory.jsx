

function ActiveHistory(){
    const squareColors = ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-gray-200", "bg-gray-200", "bg-gray-200"];

    return(
        <>
            <div className="h-auto w-4/5 mt-4">
                <div className="2xl:h-10 xl:h-8 w-full pl-2 flex justify-start items-center 2xl:text-base xl:text-sm text-gray-600 font-semibold">Active History</div>
                <div className="2xl:min-h-48 xl:min-h-40 w-full flex flex-wrap justify-center items-center bg-white shadow-md rounded">
                    {Array.from({length: 104}).map((_, index) => {
                        const randomColor = squareColors[Math.floor(Math.random() * squareColors.length)];
                        return <div key={index} className={`${randomColor} 2xl:h-4 2xl:w-4 xl:h-3 xl:w-3 m-2 2xl:rounded-md xl:rounded`}></div>
                    })}
                </div>
            </div>

        </>
    )
}

export default ActiveHistory;