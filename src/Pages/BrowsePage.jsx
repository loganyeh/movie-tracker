import Footer from "../Component/Footer";

function BrowsePage(){

    const filterNames = ["Search", "Genres", "Year", "Season", "Format", "Airing Status"];
    const top10Movies = ["", "", "", "", "", "", "", "", "", "",];

    return(
        <>
            {/*  */}
            <div className="border-2 border-purple-600 h-screen w-screen">

                {/* header */}
                <div className="border-2 border-red-600 h-20 w-full flex">
                    {/* logo section */}
                    <div className="border-2 border-red-600 h-full w-1/3 flex justify-center items-center">
                        <div className="border border-black h-full w-1/3 flex justify-center items-center">
                            <div className="border border-black h-14 w-14"></div>
                        </div>
                    </div>
                    {/* nav section */}
                    <div className="border-2 border-red-600 h-full w-1/3 flex justify-center items-center text-sm font-medium">
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Home</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Profile</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Anime List</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Manga List</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Browse</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Forum</div>
                    </div>
                    {/* profile settings section */}
                    <div className="border-2 border-blue-600 h-full w-1/3 flex justify-center items-center">
                        <div className="border-2 border-black h-full w-1/2 flex justify-end items-center">
                            <div className="border border-black h-12 w-12 flex justify-center items-center"><i className='bx bx-search border border-black text-2xl'></i></div>
                            <div className="border border-black h-12 w-12"></div>
                            <div className="border border-black h-12 w-6 flex justify-center items-center"><i className='bx bx-chevron-down text-2xl' ></i></div>
                            
                        </div>
                    </div>
                </div>

                {/* body */}
                <div className="border-2 border-blue-600 h-500 w-full flex flex-col justify-start items-center">

                    {/* search and filters */}
                    <div className="border border-black h-36 w-10/12 flex justify-between">
                        {filterNames.map((name, index) => {
                            return <div className="border-2 border-red-600 h-full w-56 flex flex-col justify-center items-start">
                                <div className="border border-black h-10 w-48 flex justify-start items-center text-lg font-semibold">{name}</div>
                                <div className="border border-black h-10 w-48 rounded-xl"></div>
                            </div>
                        })}
                        {/* filter */}
                        <div className="border-2 border-red-600 h-full w-36 flex justify-end items-center">
                            <div className="border-2 border-red-600 h-10 w-10 flex justify-center items-center rounded-xl">
                                <i class='bx bx-slider text-2xl' ></i>
                            </div>
                        </div>
                    </div>

                    {/* anime posters */}
                    <div className="border border-black h-96 w-10/12 mb-8">
                        {/* header */}
                        <div className="h-1/12 w-full text-xl font-medium">Trending Now</div>

                        {/* movie posters */}
                        <div className="h-11/12 w-full flex">
                            {filterNames.map(() => {
                                return <div className="border border-black h-full w-1/6">
                                            <div className="border border-red-600 h-4/5 w-10/12 rounded-lg"></div>
                                            <div className="border border-red-600 h-1/5 w-full font-medium">
                                                <div className="border border-black mt-2 w-10/12">MOVIE NAME</div>
                                            </div>
                                        </div>
                            })}
                        </div>
                    </div>

                    {/* TOP 100 TRENDING SECTION */}
                    <div className="border-2 border-yellow-600 h-auto w-10/12 mb-10">
                        {/* header title */}
                        <div className="border-2 border-black h-10 w-full flex">
                            <div className="border-2 border-red-600 h-full w-1/2 flex justify-start items-center text-lg font-semibold">TOP 100 MOVIES</div>
                            <div className="border-2 border-red-600 h-full w-1/2 flex justify-end items-center text-sm font-normal">View All</div>
                        </div>

                        {top10Movies.map(() => {
                            return <div className="border-2 border-red-600 h-20 w-full flex mb-6">
                                    {/* ranking */}
                                    <div className="border-2 border-red-600 h-full w-1/12 flex justify-center items-center">#1</div>
                                    {/* poster info */}
                                    <div className="border-2 border-red-600 h-full w-11/12 flex">
                                        {/* poster */}
                                        <div className="border border-black h-full w-1/12 flex justify-center items-center">
                                            <div className="border border-red-600 h-11/12 w-1/2 rounded"></div>
                                        </div>
                                        {/* title and genre */}
                                        <div className="border border-black h-full w-6/12">
                                            <div className="border border-black h-1/2 w-full flex justify-start items-center">Frieren's Beyond Journey</div>
                                            <div className="border border-black h-1/2 w-full flex justify-start items-center">
                                                <div className="border border-black h-6 w-auto px-4 mr-2 rounded-xl flex justify-center items-center text-xs font-semibold">adventure</div>
                                                <div className="border border-black h-6 w-auto px-4 mr-2 rounded-xl flex justify-center items-center text-xs font-semibold">drama</div>
                                                <div className="border border-black h-6 w-auto px-4 mr-2 rounded-xl flex justify-center items-center text-xs font-semibold">fantasy</div>
                                            </div>
                                        </div>
                                        {/* movie info */}
                                        <div className="border border-black h-full w-5/12 flex">
                                            <div className="border border-black h-full w-1/12 flex justify-center items-center">
                                                <i className='bx bx-circle text-3xl text-green-600 bg-green-600 rounded-full'></i>
                                            </div>
                                            <div className="border border-black h-full w-1/4 mr-8">
                                                <div className="border border-black h-1/2 w-full flex justify-start items-center text-lg font-medium">91%</div>
                                                <div className="border border-black h-1/2 w-full flex justify-start items-center text-xs font-semibold">391956 Users</div>
                                            </div>
                                            <div className="border border-black h-full w-1/4 mr-8">
                                                <div className="border border-black h-1/2 w-full flex justify-start items-center text-lg font-medium">91%</div>
                                                <div className="border border-black h-1/2 w-full flex justify-start items-center text-xs font-semibold">391956 Users</div>
                                            </div>
                                            <div className="border border-black h-full w-1/4 mr-8">
                                                <div className="border border-black h-1/2 w-full flex justify-start items-center text-lg font-medium">91%</div>
                                                <div className="border border-black h-1/2 w-full flex justify-start items-center text-xs font-semibold">391956 Users</div>
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