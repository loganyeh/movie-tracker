import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";

// comps
import ListStatus from "../Components/MovieListComps/ListStatus";


function SocialPage(){
    const socialListData = ["Following", "Followers", "Forum Threads", "Forum Comments"];

    return(
        <>
            <Header />

            <ProfileBanner />

            <MiddleNavBar />


            <div className="pb-96 flex justify-center bg-gray-200">

                {/* body */}
                <div className="p-5 w-full max-w-7xl 2xl:max-w-[1400px] flex flex-col md:flex-row gap-10 bg-gray-200">
                        {/* left */}
                        <div className="w-full md:max-w-[210px]">
                            <ListStatus title={"Social"} category={socialListData} />
                        </div>

                        {/* right */}
                        <div className="flex flex-1 justify-center items-center text-lg text-gray-500 font-medium">
                            Following 0 users ｡ﾟヽ(ﾟ´Д｀)ﾉﾟ｡
                        </div>

                </div>


            </div>


            <Footer />
        </>
    )
}

export default SocialPage;