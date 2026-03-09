

function Poster({ data }){
    const bubbleColors = ["hover:text-green-400", "hover:text-red-400", "hover:text-pink-400", "hover:text-red-500", "hover:text-red-400", "hover:text-blue-500"];

    return(
        <>
            <div className="h-full w-1/6 flex flex-col justify-around items-center">
                <div className="h-10/12 w-10/12 bg-white rounded-md ">
                    <img className="h-full w-full rounded-md cursor-pointer" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                </div>
                <div className="h-1/12 w-full flex justify-center items-center font-medium">
                    <div className="h-full w-10/12 text-gray-500 text-md flex justify-center items-center">
                        <span className={`${bubbleColors[data.key]} cursor-pointer`}>{data.title}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;