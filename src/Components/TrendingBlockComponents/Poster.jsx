

function Poster({ movieTitle }){

    return(
        <>
            <div className="h-full w-1/6 flex flex-col justify-around items-center">
                <div className="border border-black h-10/12 w-10/12 bg-white rounded-md "></div>
                <div className="h-1/12 w-full flex justify-center items-center font-medium">
                    <div className="border-h-full w-10/12 text-gray-500 text-md flex justify-center items-center">{movieTitle || "Movie Title"}</div>
                </div>
            </div>
        </>
    )
}

export default Poster;