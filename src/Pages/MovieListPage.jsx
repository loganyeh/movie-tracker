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

function MovieListPage(){
    const listCats = ["Watching", "Completed", "Paused", "Dropped", "Planning"];
    const filterBlockCats = ["Format", "Status", "Genres", "Country"];
    const blockTitles = ["Watching", "Completed", "Paused", "Planning", "Dropped"];

    return(
        <>
            <div className="h-auto w-screen bg-gray-200">

                {/* header */}
                <Header />

                {/* Profile Banner */}
                <ProfileBanner />

                {/* Middle NAV BAR */}
                <MiddleNavBar />

                {/* body */}
                {/* add pb-20 after done */}
                <div className="h-auto w-full flex justify-center items-start pb-20">

                    {/* container */}
                    <div className="h-auto w-10/12 flex justify-around items-start">

                        {/* left side */}
                        <div className="h-auto w-2/12">

                            {/* filter search */}
                            <FilterSearchBar />

                            {/* Lists */}
                            <ListStatus category={listCats} />

                            {/* Filters */}
                            <FilterDropdown category={filterBlockCats} />

                            {/* Year */}
                            <YearSliderBar />

                            {/* Sort */}
                            <SortDropdown />

                            {/* Shuffle Button */}
                            <ShuffleButton />

                        </div>
                        
                        {/* right side */}
                        <div className="h-auto w-9/12">

                            {/* BLOCKS */}
                            {blockTitles.map((block, index) => {
                                return <WatchStatusBlock key={index} blockTitle={block} />
                            })}

                        </div>


                    </div>


                </div>

                {/* footer */}
                <Footer />

            </div>
        
        </>
    )
}

export default MovieListPage;