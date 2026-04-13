// components
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner.js";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar.js";
import WatchStatusBlock from "../Components/MovieListComps/WatchStatusBlock.js";
import FilterIconBlock from "../Components/MovieListComps/FilterIconBlock.js";
import FilterSearchBar from "../Components/MovieListComps/FilterSearchBar.js";
import ListStatus from "../Components/MovieListComps/ListStatus.js";
import FilterDropdown from "../Components/MovieListComps/FilterDropdown.js";
import YearSliderBar from "../Components/MovieListComps/YearSliderBar.js";
import SortDropdown from "../Components/MovieListComps/SortDropdown.js";
import ShuffleButton from "../Components/MovieListComps/ShuffleButton.js";

function MovieListPage(){
    const listCats = ["Watching", "Completed", "Paused", "Dropped", "Planning"];

    return(
        <>
            {/* header */}
            <Header />

            {/* Profile Banner */}
            <ProfileBanner />

            {/* Middle NAV BAR */}
            <MiddleNavBar />

            <div className="bg-gray-200 flex justify-center">

                <div className="w-full 2xl:max-w-[1400px] xl:max-w-7xl p-4 pb-16 md:p-6 md:pb-24 flex gap-10 2xl:gap-12 flex-col md:flex-row bg-gray-200">

                    <div className="md:hidden">
                        <FilterSearchBar />
                    </div>

                    <div className="hidden w-full max-w-[210px] md:flex gap-5 flex-col">
                        {/* filter search */}
                        <FilterSearchBar />

                        {/* Lists */}
                        <ListStatus title={"Lists"} category={listCats} />

                        {/* Filters */}
                        <FilterDropdown />

                        {/* Year */}
                        <YearSliderBar />

                        {/* Sort */}
                        <SortDropdown />

                        {/* Shuffle Button */}
                        <ShuffleButton />
                    </div>


                    <div className="flex md:flex-1 gap-8 flex-col">

                        <div className="hidden md:flex justify-end">
                            <FilterIconBlock />
                        </div>

                        <WatchStatusBlock />

                    </div>

                </div>
            </div>
            
            <Footer />
        
        </>
    )
}

export default MovieListPage;