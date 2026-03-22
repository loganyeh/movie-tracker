

function MovieBanner({ data }){

    return(
        <>
            <div className="border-2 border-red-600 h-80 w-full flex justify-center items-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)", 
                    }}>
                    {/* <img className="h-full" src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" /> */}
            </div>
        </>
    )
}

export default MovieBanner;