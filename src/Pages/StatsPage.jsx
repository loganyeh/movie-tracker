import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";

// comp from movieListPage
import ListStatus from "../Components/MovieListComps/ListStatus";

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


    return(
        <>
            <div className="h-screen w-screen bg-gray-200">

                {/* header */}
                <Header />

                {/* profile banner */}
                <ProfileBanner />

                {/* TEMPORARY middle nav */}
                <MiddleNavBar />

                {/* body */}
                <div className="border-2 border-blue-600 h-auto w-full flex justify-center items-center bg-gray-200">
                    
                    {/* container */}
                    <div className="border h-auto w-10/12 pb-20 flex justify-around items-start">

                        {/* left */}
                        <div className="border-2 border-green-400 h-auto w-2/12">
                            <ListStatus title={"Anime Stats"} category={animeStatsList}/>
                            <ListStatus title={"Manga Stats"} category={mangaStatsList}/>
                        </div>

                        {/* right */}
                        <div className="border-2 border-orange-400 h-full w-9/12">

                            {/* stats */}
                            <div className="h-36 w-full mt-6 flex justify-center items-center">
                                {statsIconData.map((stat, index) => {
                                    return <div key={index} className="h-full w-1/6 flex">
                                                <div className="h-full w-2/5 flex justify-center items-center">
                                                    <div className="h-12 w-12 flex justify-center items-center bg-white shadow-md rounded-full"><i className= {`${stat.icon} text-3xl text-gray-400`}></i></div>
                                                </div>
                                                <div className="h-full w-3/5">
                                                    <div className="h-1/2 w-full flex justify-start items-end text-2xl text-blue-400 font-semibold">{stat.number || "75"}</div>
                                                    <div className="h-1/2 w-full flex justify-start items-start text-sm text-gray-500 font-medium">{stat.category || "Total Anime"}</div>
                                                </div>
                                            </div>
                                })}
                            </div>


                        </div>

                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default StatsPage;