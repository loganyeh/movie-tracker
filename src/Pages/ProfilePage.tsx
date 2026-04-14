// components
import Header from "../Components/Header.js";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner.js";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar.js";
import ActiveHistory from "../Components/ProfilePageComps/ActiveHistory.js";
import GenreOverview from "../Components/ProfilePageComps/GenreOverview.js";
import FavoritesBlock from "../Components/ProfilePageComps/FavoritesBlock.js";
import TotalChart from "../Components/ProfilePageComps/TotalChart.js";
import ActivityStatusBar from "../Components/ProfilePageComps/ActivityStatusBar.js";
import StatusTimeline from "../Components/ProfilePageComps/StatusTimeline.js";
import LoadMoreStatusTimeline from "../Components/ProfilePageComps/LoadMoreStatusTimeline.js";
import Footer from "../Components/Footer.js";

function ProfilePage(){

    return(
        <>
            <Header />

            <ProfileBanner />

            <MiddleNavBar />

            <div className="flex justify-center bg-gray-200">

                {/* --- body */}
                <div className="p-5 pb-16 xl:pb-32 w-full 2xl:max-w-[1400px] max-w-7xl flex gap-10">

                    {/* Left Side */}
                    <div className="hidden w-full max-w-md 2xl:max-w-xl xl:flex gap-8 flex-col">
                        <ActiveHistory />

                        <GenreOverview />

                        {/* - Anime FAVORITES */}
                        <FavoritesBlock blockName={"Movies"} posterAmount={5} />
                        <FavoritesBlock blockName={"Characters"} posterAmount={6} />

                    </div>

                    {/* Right Side */}
                    <div className="flex gap-6 flex-col flex-1">
                        <TotalChart />

                        <ActivityStatusBar />

                        <StatusTimeline />

                        <LoadMoreStatusTimeline />
                    </div>

                </div>

            </div>
        
            <Footer />
        </>
    )
}

export default ProfilePage;