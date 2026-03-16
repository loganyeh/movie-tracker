

function MovieDescription({ data }){

    return(
        <>
            <div className="h-10/12 w-full">
                {/* Title */}
                <div className="h-1/3 w-full flex justify-start items-center text-xl font-normal">{data?.title}</div>
                {/* Description Blurb */}
                <div className="h-2/3 w-5/6 flex justify-start items-start text-md font-light">
                    {data?.overview}
                </div>
            </div>
        </>
    )
}

export default MovieDescription;