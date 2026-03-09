import MovieBlock from "./TopMoviesComponents/MovieBlock";

function TopMoviesBlock({ data }){
    const topMovieRankings = ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#10"];

    return(
        <>
            <div className="h-auto w-10/12 my-10">
                {/* header title */}
                <div className="h-10 w-full flex mb-4">
                    <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-600 font-semibold">TOP 10 MOVIES</div>
                    <div className="h-full w-1/2 flex justify-end items-center text-sm font-normal">View All</div>
                </div>

                {data.map(( data, index) => {
                    return <MovieBlock key={index} data={data} />
                })}
            </div>
        </>
    )
}

export default TopMoviesBlock;