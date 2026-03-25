import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";

function ReviewsPage(){

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
                    <div className="h-auto w-10/12 flex justify-around items-center">

                        {/* left */}
                        {/* <div className="border-2 border-green-400 h-full w-2/12">Reviews</div> */}

                        {/* right */}

                        {/* middle */}
                        <div className="h-96 w-9/12 mb-96 flex justify-center items-center font-normal text-2xl text-gray-500">
                            No reviews yet ｡ﾟヽ(ﾟ´Д｀)ﾉﾟ｡
                        </div>

                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default ReviewsPage;