

function MovieColumnDetails(){
    const columnDetailData = [
        {title: "Format", stat: ["TV"]},
        {title: "Episodes", stat: ["26"]},
        {title: "Episode Duration", stat: ["24 Mins"]},
        {title: "Status", stat: ["Finished"]},
        {title: "Start Date", stat: ["Apr 6, 2019"]},
        {title: "End Date", stat: ["Sep 28, 2019"]},
        {title: "Season", stat: ["Spring 2019"]},
        {title: "Average Score", stat: ["82%"]},
        {title: "Mean Score", stat: ["82%"]},
        {title: "Popularity", stat: ["909,465"]},
        {title: "Favorites", stat: ["44833"]},
        {title: "Studios", stat: ["ufotable"]},
        {title: "Producers", stat: ["Aniplex", "Shueisha", "Aniples of America", "ufotable", "ufotable"]},
        {title: "Source", stat: ["Manga"]},
        {title: "Hashtag", stat: ["#鬼滅の刃"]},
        {title: "Genres", stat: ["Action", "Adventure", "Drama", "Fantasy", "Supernatural"]},
        {title: "Romaji", stat: ["Kimetsu no Yaiba"]},
        {title: "English", stat: ["Demon Slayer: Kimetsu no Yaiba"]},
        {title: "Native", stat: ["鬼滅の刃"]},
        {title: "Synonyms", stat: ["Kny", "Kimetsu no Yaiba: Kyoudai no Kizuna", "Demon Slayer: Kimetsu no Yaiba: Bonds of Siblings"]},
    ];

    return(
        <>
            <div className="border h-auto w-2/3 m-2 mb-6 bg-white rounded-lg shadow-md">
                {/* Column Details */}
                {columnDetailData.map((row, index) => {
                    return <div key={index} className="min-h-12 w-8/12 m-4">
                        <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">{row.title}</div>
                        {/* <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">{row.stat}</div> */}
                        {(row.stat).map((stat, index) => {
                            return <div key={index} className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">{stat}</div> 
                        })}
                    </div>
                })}

            </div>
        </>
    )
}

export default MovieColumnDetails;