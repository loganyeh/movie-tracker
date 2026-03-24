import Header from "../Components/Header";
import Footer from "../Components/Footer";

// react router dom import
import { Link } from "react-router-dom";

// comps
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ActiveHistory from "../Components/ProfilePageComps/ActiveHistory";
import GenreOverview from "../Components/ProfilePageComps/GenreOverview";
import FavoritesBlock from "../Components/ProfilePageComps/FavoritesBlock";
import TotalChart from "../Components/ProfilePageComps/TotalChart";

function ProfilePage(){

    // const middleNavTitles = ["Overview", "Anime List", "Manga List", "Favorites", "Stats", "Social", "Reviews", "Submissions"];
    // const squareColors = ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-gray-200", "bg-gray-200", "bg-gray-200"];
    const genreOverviewData = [
        {genre: "Comedy", numOfEntries: 51, bgColor: "bg-green-500", textColor: "text-green-500", bar: "w-4/12"},
        {genre: "Action", numOfEntries: 46, bgColor: "bg-blue-500", textColor: "text-blue-500", bar: "w-3/12"},
        {genre: "Supernatural", numOfEntries: 38, bgColor: "bg-purple-500", textColor: "text-purple-500", bar: "w-2/12"},
        {genre: "Drama", numOfEntries: 33, bgColor: "bg-red-300", textColor: "text-red-300", bar: "w-2/12"},
        {genre: "Romance", numOfEntries: 31, bgColor: "bg-pink-500", textColor: "text-pink-500", bar: "w-1/12"},
    ]
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
            <div className="min-h-screen w-screen bg-gray-200">
                {/* --- HEADER */}
                <Header />

                {/* --- body */}
                <div className="h-auto w-full">

                    {/* - profile banner */}
                    <ProfileBanner />

                    {/* - midSection NavBar */}
                    <MiddleNavBar />

                    {/* -- Profile Page Stats */}
                    <div className="border-2 border-red-600 h-auto w-full flex justify-center items-center pb-20">
                        
                        {/* Container */}
                        <div className="h-auto w-10/12 flex justify-center items-start">

                            {/* Left Side */}
                            <div className="h-auto w-1/2 flex flex-col justify-center items-center">

                                {/* - Active History */}
                                <ActiveHistory />

                                {/* - Genre Overview */}
                                <GenreOverview />

                                {/* - Anime FAVORITES */}
                                <FavoritesBlock blockName={"Movies"} posterAmount={5} />
                                <FavoritesBlock blockName={"Shows"} posterAmount={5} />
                                {/* - Character FAVORITES */}
                                <FavoritesBlock blockName={"Characters"} posterAmount={8} />

                            </div>

                            {/* Right Side */}
                            <div className="h-auto w-1/2 flex flex-col justify-center items-center">

                                {/* -- Charts */}
                                <TotalChart />

                                {/* -- Activity */}
                                <div className="h-auto w-full mt-4">
                                    <div className="h-10 w-full px-2 flex justify-between items-center text-md text-gray-600 font-semibold">
                                        <div>Activity</div>
                                        <div className="text-sm text-gray-400 font-light flex">
                                            <span className="mr-1">Filter</span>
                                            <div className="flex justify-center items-center"><i className='bx bx-chevron-down'></i></div>
                                            
                                        </div>
                                    </div>
                                    <div className="h-12 w-full flex justify-start items-center bg-white shadow-md rounded">
                                        <div className="h-full w-auto ml-2 flex justify-center items-center text-sm text-gray-400">Write a Status...</div>
                                    </div>
                                </div>

                                {/* Status Timeline */}
                                <div className="h-auto w-full mt-4">
                                    <div className="h-auto w-full flex flex-wrap justify-between items-center">
                                        {Array.from({length: 23}).map((_, index) => {
                                            return <div className="min-h-14 w-96 mb-4 flex justify-between items-center bg-white shadow-md rounded">
                                                        <div className="h-18 w-14 bg-blue-300 rounded-l"></div>
                                                        <div className="h-18 w-56 flex justify-center items-center text-sm font-normal">
                                                            <span>Read Chapter 229-230 of <span className="text-blue-400">Chainsaw Man</span></span>
                                                        </div>
                                                        <div className="h-18 w-24">
                                                            <div className="h-1/2 w-full flex justify-center items-center text-xs text-gray-500 whitespace-nowrap">2 Weeks Ago</div>
                                                            <div className="h-1/2 w-full flex justify-end items-center">
                                                                <div className="h-full w-1/4 flex justify-center items-center text-gray-400"><i className='bx bxs-chat text-xl' ></i></div>
                                                                <div className="h-full w-1/4 flex justify-center items-center text-gray-400"><i className='bx bxs-heart text-xl' ></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                        })}

                                    </div>
                                </div>

                                {/* Load More Timeline */}
                                <div className="h-12 w-full mt-6 flex justify-center items-center bg-white text-gray-500 font-semibold rounded">Load More</div>

                            </div>


                        </div>

                    </div>

                </div>


                {/* --- FOOTER */}
                <Footer />

            </div>
        
        </>
    )
}

export default ProfilePage;