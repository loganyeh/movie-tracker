import ChartBlock from "./ChartBlock";

function TotalChart(){
    const totalAnimeData = [
        {number: 75, subtitle: "Total Anime"},
        {number: 28.6, subtitle: "Days Watched"},
        {number: 78.2, subtitle: "Mean Score"},
    ];
    const totalMangaData = [
        {number: 14, subtitle: "Total Manga"},
        {number: 714, subtitle: "Chapters Read"},
        {number: 85.0, subtitle: "Mean Score"},
    ];
    const totalAnimeMeasure = ["10", "30", "50"];
    const totalMangaMeasure = ["100", "500", "1000"];

    return(
        <>
            <div className="h-auto w-full mt-8 2xl:flex justify-between items-center xl:block">

                {/* - Total Anime */}
                <ChartBlock data={totalAnimeData} measure={totalAnimeMeasure} barProgress={"w-1/2"} />
                
                {/* - Total Manga */}
                <ChartBlock data={totalMangaData} measure={totalMangaMeasure} barProgress={"w-7/12"} />

                </div>
        
        </>
    )
}

export default TotalChart;