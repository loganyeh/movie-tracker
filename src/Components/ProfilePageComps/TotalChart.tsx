import ChartBlock from "./ChartBlock.js";

export type chartDataType = {
    number: number;
    subtitle: String;
}

function TotalChart(){
    const totalAnimeData: chartDataType[] = [
        {number: 75, subtitle: "Total Anime"},
        {number: 28.6, subtitle: "Days Watched"},
        {number: 78.2, subtitle: "Mean Score"},
    ];
    const totalMangaData: chartDataType[] = [
        {number: 14, subtitle: "Total Manga"},
        {number: 714, subtitle: "Chapters Read"},
        {number: 85.0, subtitle: "Mean Score"},
    ];
    const totalAnimeMeasure = ["10", "30", "50"];
    const totalMangaMeasure = ["100", "500", "1000"];

    return(
        <>
            <div className="flex gap-6 flex-col 2xl:grid 2xl:gap-8 2xl:grid-cols-2">

                {/* - Total Anime */}
                <ChartBlock data={totalAnimeData} measure={totalAnimeMeasure} barProgress={"w-1/2"} />
                
                {/* - Total Manga */}
                <ChartBlock data={totalMangaData} measure={totalMangaMeasure} barProgress={"w-7/12"} />

                </div>
        
        </>
    )
}

export default TotalChart;