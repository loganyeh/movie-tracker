

function MovieBanner({ data }){

    return(
        <>
        {/* left off here add banner to mobile on movie info page */}
            <div className="absolute 2xl:h-80 xl:h-64 w-full flex justify-center items-center z-0"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // filter: "blur(8px)",
                }}>
                {/* <img className="h-full" src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`} alt="" /> */}
            </div>
        </>
    )
}

export default MovieBanner;