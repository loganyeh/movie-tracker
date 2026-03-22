

function MovieColumnDetails({ data }){
    const columnDetailData = [
        {title: "Format", stat: ["Movie"]},
        {title: "Runtime", stat: [`${data?.runtime} Min`]},
        {title: "Status", stat: [data?.status]},
        {title: "Release Date", stat: [`${data?.release_date}`]},
        {title: "Average Score", stat: [`${data?.vote_average.toString().split(".").join("").slice(0, 2)}%`]},
        {title: "Mean Score", stat: [`${data?.vote_average.toString().split(".").join(".").slice(0,3)}`]},
        {title: "Popularity", stat: [`${data?.popularity.toLocaleString().split(".")}`]},
        {title: "Vote Count", stat: [`${data?.vote_count.toLocaleString()}`]},
        {title: "Studios", stat: [`${data?.production_companies.map((company, index) => {
            return company.name
        }).join(" ")}`]},
        // {title: "Producers", stat: ["Aniplex", "Shueisha", "Aniples of America", "ufotable", "ufotable"]},
        {title: "Budget", stat: [`$${data?.budget.toLocaleString()}`]},
        {title: "Genres", stat: [`${data?.genres.map((genre, index) => {
            return genre.name
        }).join(" ") || "N/A"}`]},
        {title: "Language", stat: [`${data?.spoken_languages[0].english_name || "English"}`]},
        {title: "English", stat: [`${data?.title}`]},
        {title: "Tagline", stat: [`"${data?.tagline}"`]},
        // {title: "Tagline", stat: ["Kny", "Kimetsu no Yaiba: Kyoudai no Kizuna", "Demon Slayer: Kimetsu no Yaiba: Bonds of Siblings"]},
    ];

    return(
        <>
            <div className="h-auto w-2/3 m-2 mb-6 bg-white rounded-lg shadow-md">
                {/* Column Details */}
                {columnDetailData.map((row, index) => {
                    return <div key={index} className="min-h-12 w-8/12 m-4">
                        <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">{row.title}</div>
                        {/* <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">{row.stat}</div> */}
                        {(row.stat).map((stat, index) => {
                            return <div key={index} className="min-h-6 w-full flex justify-start items-center text-gray-400 text-xs">{stat}</div> 
                        })}
                    </div>
                })}

            </div>
        </>
    )
}

export default MovieColumnDetails;