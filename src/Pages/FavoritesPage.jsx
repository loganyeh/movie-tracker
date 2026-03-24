import Header from "../Components/Header";
import Footer from "../Components/Footer";

// profile banner comps
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";

// favoritePage comps
import FavoriteBlock from "../Components/FavoritePageComps/FavoriteBlock";

function FavoritesPage(){

    return(
        <>
            <div className="h-screen w-screen bg-gray-200">

                {/* header */}
                <Header />

                {/* Profile Banner */}
                <ProfileBanner />

                {/* Middle Nav Bar */}
                <MiddleNavBar />

                {/* body */}
                <div className="h-auto w-full pb-64 flex justify-center items-center bg-gray-200 text-4xl">
                    
                    {/* favorite block container */}
                    <div className="h-auto w-full flex flex-col justify-center items-center">
                        <FavoriteBlock title={"Movie"} numOfFavs={10}/>
                        <FavoriteBlock title={"Characters"} numOfFavs={4}/>
                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        
        </>
    )
}

export default FavoritesPage;