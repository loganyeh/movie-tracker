import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import TrendingPosterBlock from "../Components/TrendingBlock";
import TopMoviesBlock from "../Components/TopMoviesBlock";

function BrowsePage(){

    const filterTitles = ["Genres", "Year", "Season", "Format", "Airing Status"];
    const movieHeaderTitles = ["TRENDING NOW", "POPULAR THIS SEASON", "UPCOMING NEXT SEASON", "ALL TIME POPULAR"];

    return(
        <>
            {/*  */}
            <div className="min-h-screen w-screen bg-gray-200">

                {/* header */}
                <Header />

                {/* body */}
                <div className="h-auto w-full flex flex-col justify-start items-center">
                    {/* search and filters */}
                    <div className="h-36 w-10/12 flex justify-between">
                        {/* search */}
                        <Search />
                        {/* filter */}
                        {filterTitles.map((title, index) => {
                            return <Filter key={index} title={title} />
                        })}
                        {/* filter ICON*/}
                        <div className="h-full w-36 flex flex-col justify-center items-end">
                            <div className="h-10 w-full"></div>
                            <div className="border border-gray-200 h-10 w-10 flex justify-center items-center bg-gray-50 rounded-xl shadow-md cursor-pointer">
                                <i class='bx bx-slider text-2xl text-gray-400 hover:text-blue-400' ></i>
                            </div>
                        </div>
                    </div>

                    {/* anime posters */}
                    {movieHeaderTitles.map((title, index) => {
                        return <TrendingPosterBlock key={index} title={title} />
                    })}

                    {/* TOP 10 TRENDING SECTION */}
                    <TopMoviesBlock />

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default BrowsePage;