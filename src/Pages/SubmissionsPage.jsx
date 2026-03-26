import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";

import ListStatus from "../Components/MovieListComps/ListStatus";

function SubmissionsPage(){
    const submissionListData = ["Anime", "Manga", "Characters", "Staff"];

    return(
        <>
            <div className="h-screen w-screen">

                {/* header */}
                <Header />

                <ProfileBanner />

                {/* TEMPORARY middle nav */}
                <MiddleNavBar />

                {/* body */}
                <div className="h-auto w-full flex justify-center items-start bg-gray-200">
                    
                    {/* container */}
                    <div className="h-auto w-10/12 flex justify-around items-start">

                        {/* left */}
                        <div className="h-full w-2/12">
                            <ListStatus title={"Submissions"} category={submissionListData} />
                        </div>

                        {/* right */}
                        <div className="h-96 w-9/12 mb-96 flex justify-center items-center 2xl:text-2xl xl:text-xl text-gray-500">
                            No anime submissions yet (◕︿◕✿)
                        </div>

                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default SubmissionsPage;