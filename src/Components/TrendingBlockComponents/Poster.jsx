

function Poster({ data }){

    return(
        <>
            <div className="h-full w-1/6 flex flex-col justify-around items-center cursor-pointer">
                <div className="h-10/12 w-10/12 bg-white rounded-md ">
                    <img className="h-full w-full rounded-md" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                </div>
                <div className="h-1/12 w-full flex justify-center items-center font-medium">
                    <div className="border-h-full w-10/12 text-gray-500 text-md flex justify-center items-center">{data.title || "Movie Title"}</div>
                </div>
            </div>
        </>
    )
}

export default Poster;