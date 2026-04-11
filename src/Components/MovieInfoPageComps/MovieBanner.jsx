

function MovieBanner({ data }){

    return(
        <>
            <div className="h-52 md:h-[344px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
                    // filter: "blur(8px)",
                }}>
                {/* <img className="h-full" src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`} alt="" /> */}
            </div>
        </>
    )
}

export default MovieBanner;