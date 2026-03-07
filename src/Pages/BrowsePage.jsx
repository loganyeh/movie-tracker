import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Search from "../Components/Search";
import Filter from "../Components/Filter";

function BrowsePage(){

    const filterTitles = ["Genres", "Year", "Season", "Format", "Airing Status"];

    const fourSectionsPlaceholder = ["", "", "", ""];
    const trendingNowPlaceholder = ["", "", "", "", "", ""];
    const top10MoviesPlaceholder = ["", "", "", "", "", "", "", "", "", "",];

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
                    <div className="h-96 w-10/12 mb-6">
                        {/* trending now */}
                        <div className="h-1/12 w-full flex">
                            <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-700 font-medium">TRENDING NOW</div>
                            <div className="h-full w-1/2 flex justify-end items-center text-xs text-gray-400 font-medium"><span className="cursor-pointer hover:text-gray-700">View All</span></div>
                        </div>

                        {/* movie posters */}
                        <div className="h-11/12 w-full flex">
                            {trendingNowPlaceholder.map(() => {
                                return <div className="h-full w-1/6 flex flex-col justify-around items-center">
                                    <div className="border border-black h-10/12 w-10/12 bg-white rounded-md "></div>
                                    <div className="h-1/12 w-full flex justify-center items-center font-medium">
                                        <div className="border-h-full w-10/12 text-gray-500 text-md flex justify-center items-center">Movie Title</div>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>

                    <div className="h-96 w-10/12 mb-6">
                        {/* popular this season */}
                        <div className="h-1/12 w-full flex">
                            <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-700 font-medium">POPULAR THIS SEASON</div>
                            <div className="h-full w-1/2 flex justify-end items-center text-xs text-gray-400 font-medium"><span className="cursor-pointer hover:text-gray-700">View All</span></div>
                        </div>

                        {/* movie posters */}
                        <div className="h-11/12 w-full flex">
                            {trendingNowPlaceholder.map(() => {
                                return <div className="h-full w-1/6 flex flex-col justify-around items-center">
                                    <div className="border border-black h-10/12 w-10/12 bg-white rounded-md "></div>
                                    <div className="h-1/12 w-full flex justify-center items-center font-medium">
                                        <div className="border-h-full w-10/12 text-gray-500 text-md flex justify-center items-center">Movie Title</div>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>

                    <div className="h-96 w-10/12 mb-6">
                        {/* upcoming next season */}
                        <div className="h-1/12 w-full flex">
                            <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-700 font-medium">UPCOMING NEXT SEASON</div>
                            <div className="h-full w-1/2 flex justify-end items-center text-xs text-gray-400 font-medium"><span className="cursor-pointer hover:text-gray-700">View All</span></div>
                        </div>

                        {/* movie posters */}
                        <div className="h-11/12 w-full flex">
                            {trendingNowPlaceholder.map(() => {
                                return <div className="h-full w-1/6 flex flex-col justify-around items-center">
                                    <div className="border border-black h-10/12 w-10/12 bg-white rounded-md "></div>
                                    <div className="h-1/12 w-full flex justify-center items-center font-medium">
                                        <div className="border-h-full w-10/12 text-gray-500 text-md flex justify-center items-center">Movie Title</div>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>

                    <div className="h-96 w-10/12 mb-6">
                        {/* all time popular */}
                        <div className="h-1/12 w-full flex">
                            <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-700 font-medium">ALL TIME POPULAR</div>
                            <div className="h-full w-1/2 flex justify-end items-center text-xs text-gray-400 font-medium"><span className="cursor-pointer hover:text-gray-700">View All</span></div>
                        </div>

                        {/* movie posters */}
                        <div className="h-11/12 w-full flex">
                            {trendingNowPlaceholder.map(() => {
                                return <div className="h-full w-1/6 flex flex-col justify-around items-center">
                                    <div className="border border-black h-10/12 w-10/12 bg-white rounded-md "></div>
                                    <div className="h-1/12 w-full flex justify-center items-center font-medium">
                                        <div className="border-h-full w-10/12 text-gray-500 text-md flex justify-center items-center">Movie Title</div>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>

                    {/* TOP 10 TRENDING SECTION */}
                    <div className="h-auto w-10/12 mb-10">
                        {/* header title */}
                        <div className="h-10 w-full flex">
                            <div className="h-full w-1/2 flex justify-start items-center text-lg font-semibold">TOP 10 MOVIES</div>
                            <div className="h-full w-1/2 flex justify-end items-center text-sm font-normal">View All</div>
                        </div>

                        {top10MoviesPlaceholder.map(() => {
                            return <div className="h-20 w-full flex mb-6">
                                        {/* ranking */}
                                        <div className="h-full w-1/12 flex justify-center items-center text-2xl">#1</div>
                                        {/* poster info */}
                                        <div className="h-full w-11/12 flex bg-white rounded shadow-md">
                                            {/* poster */}
                                            <div className="h-full w-1/12 flex justify-center items-center">
                                                <div className="border-2 border-red-600 h-11/12 w-1/2 rounded"></div>
                                            </div>
                                            {/* title and genre */}
                                            <div className="h-full w-6/12">
                                                <div className="h-1/2 w-full flex justify-start items-end text-lg font-medium">Frieren's Beyond Journey</div>
                                                <div className="h-1/2 w-full flex justify-start items-center">
                                                    <div className="h-6 w-auto px-4 mr-2 flex justify-center items-center bg-green-300 text-xs font-semibold rounded-xl shadow">adventure</div>
                                                    <div className="h-6 w-auto px-4 mr-2 flex justify-center items-center bg-green-300 text-xs font-semibold rounded-xl shadow">drama</div>
                                                    <div className="h-6 w-auto px-4 mr-2 flex justify-center items-center bg-green-300 text-xs font-semibold rounded-xl shadow">fantasy</div>
                                                </div>
                                            </div>
                                            {/* movie info */}
                                            <div className="h-full w-5/12 flex">
                                                <div className="h-full w-1/12 flex justify-start items-center">
                                                    <i className='bx bx-circle text-3xl text-green-500 bg-green-500 rounded-full'></i>
                                                </div>
                                                <div className="h-full w-1/4 mr-8">
                                                    <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">91%</div>
                                                    <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">391956 Users</div>
                                                </div>
                                                <div className="h-full w-1/4 mr-8">
                                                    <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">TV SHOW</div>
                                                    <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">28 Episodes</div>
                                                </div>
                                                <div className="h-full w-1/4 mr-8">
                                                    <div className="h-1/2 w-full flex justify-start items-end text-gray-600 text-md font-medium">Fall 2023</div>
                                                    <div className="h-1/2 w-full flex justify-start items-start text-gray-400 text-xs font-normal">Finished</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                        
                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default BrowsePage;