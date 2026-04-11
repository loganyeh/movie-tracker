

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
            <div className="p-5 flex gap-7 bg-white rounded-sm shadow overflow-x-auto scroll-smooth">
                {/* Column Details */}
                {columnDetailData.map((row, index) => {
                    return <div key={index} className="flex gap-1.5 flex-col text-sm whitespace-nowrap">
                                <div className="text-gray-400">{row.title}</div>
                                {(row.stat).map((stat, index) => {
                                    return <div key={index} className="text-gray-500">{stat}</div> 
                                })}
                            </div>
                })}

            </div>
        </>
    )
}

export default MovieColumnDetails;