import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";

// comp from movieListPage
import ListStatus from "../Components/MovieListComps/ListStatus.js";

// page COMPS
import StatIconsBlock from "../Components/StatsPageComps/StatIconsBlock";
import BarGraphBlock from "../Components/StatsPageComps/BarGraphBlock";
import PieChartBlock from "../Components/StatsPageComps/PieChartBlock";

// export type BarGraphType = {
//     barHeight: string;
//     barY: number;
//     barX: number;
// }

function StatsPage(){

    const animeStatsList = ["Overview", "Genres", "Tags", "Voice Actors", "Studios", "Staff"];
    const mangaStatsList = ["Overview", "Genres", "Tags", "Staff"];

    const scoreData = [
        {barHeight: "h-3/12", barY: 4, barX: 5},
        {barHeight: "h-5/12", barY: 5, barX: 6},
        {barHeight: "h-6/12", barY: 6, barX: 7},
        {barHeight: "h-7/12", barY: 7, barX: 8},
        {barHeight: "h-8/12", barY: 8, barX: 9},
        {barHeight: "h-5/12", barY: 9, barX: 10},
    ]

    const episodeCountData = [
        {barHeight: "h-6/12", barY: 4, barX: "1"},
        {barHeight: "h-4/12", barY: 5, barX: "2-6"},
        {barHeight: "h-10/12", barY: 6, barX: "7-16"},
        {barHeight: "h-4/12", barY: 7, barX: "17-18"},
        {barHeight: "h-2/12", barY: 8, barX: "101+"},
    ]

    const releaseYearData = [
        {barHeight: "h-6/12", barY: 6, barX: "2023"},
        {barHeight: "h-8/12", barY: 8, barX: "2024"},
        {barHeight: "h-7/12", barY: 7, barX: "2025"},
        {barHeight: "h-10/12", barY: 25, barX: "2026"},
    ]; 
    
    const watchYearData = [
        {barHeight: "h-1/12", barY: 1, barX: "2024"},
        {barHeight: "h-2/12", barY: 3, barX: "2025"},
        {barHeight: "h-10/12", barY: 70, barX: "2026"},

    ];

    return(
        <>
            <Header />

            <ProfileBanner />

            <MiddleNavBar />

            <div className="flex justify-center bg-gray-200">

                {/* body */}
                <div className="w-full 2xl:max-w-[1400px] max-w-7xl p-4 pb-16 md:p-6 md:pb-24 lg:pb-32 flex gap-10 2xl:gap-12 justify-center bg-gray-200">
                    
                    {/* 1 */}
                    <div className="hidden w-full max-w-[210px] md:flex gap-5 flex-col">
                        <ListStatus title={"Anime Stats"} category={animeStatsList}/>
                        <ListStatus title={"Manga Stats"} category={mangaStatsList}/>
                    </div>

                    {/* 2 */}
                    <div className="w-full flex gap-16 flex-col md:flex-1">

                        <div className="md:hidden flex justify-between items-center">
                            <div className="text-lg text-gray-600 tracking-wide font-semibold">hanni's Stats</div>
                            <i className='bx bx-dots-horizontal-rounded p-1.5 text-2xl text-gray-600 bg-white rounded shadow' ></i>
                        </div>

                        {/* stats */}
                        <StatIconsBlock />

                        {/* score bar graphs */}
                        <BarGraphBlock data={scoreData} title={"Score"} />
                        <BarGraphBlock data={episodeCountData} title={"Episode Count"} />

                        <div className="flex flex-col gap-8 xl:grid xl:grid-cols-3">
                            <PieChartBlock  />
                        </div>

                        {/* Release Year */}
                        <BarGraphBlock data={releaseYearData} title={"Release Year"}/>

                        {/* Watch Year */}
                        <BarGraphBlock data={watchYearData} title={"Watch Year"} />

                    </div>

                </div>


            </div>

            <Footer />

        </>
    )
}

export default StatsPage;