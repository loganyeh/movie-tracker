import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

// profile banner comps
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner.js";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar.js";

// favoritePage comps
import FavoriteBlock from "../Components/FavoritePageComps/FavoriteBlock.js";

function FavoritesPage(){

    return(
        <>
            <Header />

            <ProfileBanner />

            <MiddleNavBar />

            <div className="pb-20 2xl:pb-40 flex justify-center bg-gray-200">
                <div className="w-full 2xl:max-w-[1400px] max-w-7xl p-5 flex gap-10 flex-col bg-gray-200">
                    <FavoriteBlock title={"Movie"} numOfFavs={5}/>
                    <FavoriteBlock title={"Characters"} numOfFavs={4}/>
                </div>
            </div>
        
            <Footer />
        </>
    )
}

export default FavoritesPage;