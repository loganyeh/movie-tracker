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
                    <div className="h-auto w-full flex justify-center items-center pb-20">
                        
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
                                {/* <FavoritesBlock blockName={"Shows"} posterAmount={5} /> */}
                                {/* - Character FAVORITES */}
                                <FavoritesBlock blockName={"Characters"} posterAmount={8} />

                            </div>

                            {/* Right Side */}
                            <div className="h-auto w-1/2 flex flex-col justify-center items-center">

                                {/* -- Charts */}
                                <TotalChart />

                                {/* -- Activity */}
                                <ActivityStatusBar />

                                {/* Status Timeline */}
                                <StatusTimeline />

                                {/* Load More Timeline */}
                                <LoadMoreStatusTimeline />

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