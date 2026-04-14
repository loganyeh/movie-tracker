import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar.js";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner.js";

import ListStatus from "../Components/MovieListComps/ListStatus.js";

function SubmissionsPage(){
    const submissionListData = ["Anime", "Manga", "Characters", "Staff"];

    return(
        <>
            <Header />

            <ProfileBanner />

            <MiddleNavBar />

            <div className="flex justify-center bg-gray-200">

                {/* body */}
                <div className="w-full 2xl:max-w-[1400px] max-w-7xl p-5 pb-96 flex flex-col md:flex-row gap-10 bg-gray-200">
                    
                        {/* left */}
                        <div className="w-full md:max-w-[210px]">
                            <ListStatus title={"Submissions"} category={submissionListData} />
                        </div>

                        {/* right */}
                        <div className="h-96 pt-10 flex-1 flex justify-center text-xl text-gray-500">
                            No anime submissions yet (◕︿◕✿)
                        </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default SubmissionsPage;