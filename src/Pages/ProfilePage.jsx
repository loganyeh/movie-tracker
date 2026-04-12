// components
import Header from "../Components/Header";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ActiveHistory from "../Components/ProfilePageComps/ActiveHistory";
import GenreOverview from "../Components/ProfilePageComps/GenreOverview";
import FavoritesBlock from "../Components/ProfilePageComps/FavoritesBlock";
import TotalChart from "../Components/ProfilePageComps/TotalChart";
import ActivityStatusBar from "../Components/ProfilePageComps/ActivityStatusBar";
import StatusTimeline from "../Components/ProfilePageComps/StatusTimeline";
import LoadMoreStatusTimeline from "../Components/ProfilePageComps/LoadMoreStatusTimeline";
import Footer from "../Components/Footer";

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