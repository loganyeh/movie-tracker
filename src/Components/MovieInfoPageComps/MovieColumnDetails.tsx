
type MovieColumnDetailsProp = {
    original_title: string;
    production_companies: 
        {
            name: string;
        }[];
    runtime: number;
    status: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    vote_count: number;
    budget: number;
    genres: 
        {
            name: string;
        }[];
    spoken_languages: {
        english_name: string;
        }[];
    tagline: string;
}

function MovieColumnDetails({ original_title, production_companies, runtime, status, 
    release_date, vote_average, popularity, vote_count, budget, genres, 
    spoken_languages, tagline }: MovieColumnDetailsProp ){
        
    const columnDetailData = [
        {title: "Format", stat: ["Movie"]},
        {title: "Runtime", stat: [`${runtime} Min`]},
        {title: "Status", stat: [status]},
        {title: "Release Date", stat: [`${release_date}`]},
        {title: "Average Score", stat: [`${vote_average.toString().split(".").join("").slice(0, 2)}%`]},
        {title: "Mean Score", stat: [`${vote_average.toString().split(".").join(".").slice(0,3)}`]},
        {title: "Popularity", stat: [`${popularity.toLocaleString().split(".")}`]},
        {title: "Vote Count", stat: [`${vote_count.toLocaleString()}`]},
        {title: "Studios", stat: [`${production_companies.map((company, _) => {
            return company.name
        }).join(" ")}`]},
        // {title: "Producers", stat: ["Aniplex", "Shueisha", "Aniples of America", "ufotable", "ufotable"]},
        {title: "Budget", stat: [`$${budget.toLocaleString()}`]},
        {title: "Genres", stat: [`${genres.map((genre, _) => {
            return genre.name
        }).join(" ") || "N/A"}`]},
        {title: "Language", stat: [`${spoken_languages[0]?.english_name || "Engmlish"}`]},
        {title: "English", stat: [`${original_title}`]},
        {title: "Tagline", stat: [`"${tagline}"`]},
        // {title: "Tagline", stat: ["Kny", "Kimetsu no Yaiba: Kyoudai no Kizuna", "Demon Slayer: Kimetsu no Yaiba: Bonds of Siblings"]},
    ];

    return(
        <>
            <div className="p-5 flex md:flex-col gap-[28px] md:gap-4 bg-white rounded-sm shadow overflow-x-auto scroll-smooth">
                {/* Column Details */}
                {columnDetailData.map((row, index) => {
                    return <div key={index} className="flex gap-1.5 flex-col text-sm whitespace-nowrap md:whitespace-normal">
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