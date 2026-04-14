
type MovieBannerProp = {
    backdrop_path: string;
    loading: boolean;
}

function MovieBanner({ backdrop_path, loading }: MovieBannerProp ){

    return(
        <>
            {loading 
            ?
            (<div className="h-52 md:h-[344px] bg-cover bg-center flex justify-center items-center">
                <i className='bx bx-loader-alt text-4xl animate-spin'></i>
            </div>)
            :
            (<div className="h-52 md:h-[344px] bg-cover bg-center"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
            }}>
            </div>)
            }
        </>
    )
}

export default MovieBanner;