import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar.js";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner.js";

function ReviewsPage(){

    return(
        <>
            <Header />

            <ProfileBanner />

            <MiddleNavBar />

            <div className="flex justify-center bg-gray-200">
                <div className="h-96 pt-10 mb-72 text-xl text-gray-500">
                    No reviews yet ｡ﾟヽ(ﾟ´Д｀)ﾉﾟ｡
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ReviewsPage;