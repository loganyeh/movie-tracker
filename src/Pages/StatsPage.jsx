import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";

// comp from movieListPage
import ListStatus from "../Components/MovieListComps/ListStatus";

// page COMPS
import StatIconsBlock from "../Components/StatsPageComps/StatIconsBlock";
import BarGraphBlock from "../Components/StatsPageComps/BarGraphBlock";
import PieChartBlock from "../Components/StatsPageComps/PieChartBlock";
// import PieChart from "../Components/StatsPageComps/PieChart";

function StatsPage(){

    const animeStatsList = ["Overview", "Genres", "Tags", "Voice Actors", "Studios", "Staff"];
    const mangaStatsList = ["Overview", "Genres", "Tags", "Staff"];

    const statsIconData = [
        {icon: 'bx bx-desktop text-3xl text-gray-400', number: 75, category: "Total Anime"},
        {icon: 'bx bx-play', number: 1736, category: "Episodes Watched"},
        {icon: 'bx bx-calendar-alt', number: 28.6, category: "Days Watched"},
        {icon: 'bx bx-hourglass', number: 40.3, category: "Days Planned"},
        {icon: 'bx bx-objects-vertical-top', number: 78.21, category: "Mean Score"},
        {icon: 'bx bx-checkbox-minus', number: 14.2, category: "Standard Deviation"},
    ];

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

    // Pie Chart Data
    const formatDistributionData = [
        {category: "TV", percentage: "68"},
        {category: "Movie", percentage: "11"},
        {category: "OVA", percentage: "10"},
    ]
    const statusDistributionData = [
        {category: "Plannning", percentage: "68"},
        {category: "Completed", percentage: "24"},
        {category: "Paused", percentage: "5"},
    ]
    const countryDistributionData = [
        {category: "Japan", percentage: "96"},
        {category: "China", percentage: "3"},
        {category: "South Korea", percentage: "1"},
    ]

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
                        <StatIconsBlock data={statsIconData} />

                        {/* score bar graphs */}
                        <BarGraphBlock data={scoreData} title={"Score"} />
                        <BarGraphBlock data={episodeCountData} title={"Episode Count"} />

                        <div className="flex flex-col gap-8 xl:grid xl:grid-cols-3">
                            <PieChartBlock title={"Format Distribution"} data={formatDistributionData} />
                            <PieChartBlock title={"Status Distribution"} data={statusDistributionData} />
                            <PieChartBlock title={"Country Distribution"} data={countryDistributionData} />
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