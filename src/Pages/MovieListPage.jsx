// components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";
import WatchStatusBlock from "../Components/MovieListComps/WatchStatusBlock";
import FilterSearchBar from "../Components/MovieListComps/FilterSearchBar";
import ListStatus from "../Components/MovieListComps/ListStatus";
import FilterDropdown from "../Components/MovieListComps/FilterDropdown";
import YearSliderBar from "../Components/MovieListComps/YearSliderBar";
import SortDropdown from "../Components/MovieListComps/SortDropdown";
import ShuffleButton from "../Components/MovieListComps/ShuffleButton";
import FilterIconBlock from "../Components/MovieListComps/FilterIconBlock";

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