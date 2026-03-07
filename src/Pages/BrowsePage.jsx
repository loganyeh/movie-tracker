import Footer from "../Component/Footer";

function BrowsePage(){

    const filterNames = ["Genres", "Year", "Season", "Format", "Airing Status"];
    const filterData = [
        {title: "Search", placeholder: ""},
        {title: "Genres", placeholder: "Any"}
    ]
    const top10Movies = ["", "", "", "", "", "", "", "", "", "",];

    return(
        <>
            {/*  */}
            <div className="min-h-screen w-screen bg-gray-200">

                {/* header */}
                <div className="h-20 w-full flex bg-gray-800 text-gray-300">
                    {/* logo section */}
                    <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-1/3 flex justify-center items-center">
                            <div className="border-2 border-white h-14 w-14 bg-white"></div>
                        </div>
                    </div>
                    {/* nav section */}
                    <div className="h-full w-1/3 flex justify-center items-center text-sm font-medium">
                        <div className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">Home</span></div>
                        <div className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">Profile</span></div>
                        <div className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">Anime List</span></div>
                        <div className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">Manga List</span></div>
                        <div className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">Browse</span></div>
                        <div className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">Forum</span></div>
                    </div>
                    {/* profile settings section */}
                    <div className="h-full w-1/3 flex justify-center items-center">
                        <div className="h-full w-1/2 flex justify-end items-center">
                            <div className="h-12 w-12 flex justify-center items-center"><i className='bx bx-search text-2xl text-gray-200 cursor-pointer hover:text-white'></i></div>
                            <div className="border-2 border-white h-12 w-12 bg-white rounded"></div>
                            <div className="h-12 w-6 flex justify-center items-center"><i className='bx bx-chevron-down text-2xl text-gray-200 cursor-pointer hover:text-white' ></i></div>
                            
                        </div>
                    </div>
                </div>

                {/* body */}
                <div className="h-auto w-full flex flex-col justify-start items-center">

                    {/* search and filters */}
                    <div className="h-36 w-10/12 flex justify-between">
                        {/* search */}
                        <div className="h-full w-56 flex flex-col justify-center items-start">
                            <div className="h-10 w-48 flex justify-start items-center text-gray-700 text-md font-semibold">Search</div>
                            {/* search input */}
                            <div className="h-10 w-48 flex bg-gray-50 rounded-lg shadow-md">
                                <div className="h-full w-2/12 flex justify-center items-center cursor-pointer"><i className='bx bx-search text-gray-500' ></i></div>
                                <input type="text" className=" h-full w-10/12 pl-2 text-sm font-medium bg-gray-50 rounded-lg outline-none"/>
                            </div>
                        </div>
                        {/* filter */}
                        {filterNames.map((name, index) => {
                            return <div key={index} className="h-full w-56 flex flex-col justify-center items-start">
                                <div className="h-10 w-48 flex justify-start items-center text-gray-700 text-md font-semibold">{name}</div>
                                {/* filters */}
                                <div className="h-10 w-48 flex bg-gray-50 rounded-lg shadow-md">
                                    <input type="text" placeholder="Any" className=" h-full w-10/12 pl-4 text-sm font-medium bg-gray-50 rounded-lg outline-none"/>
                                    <div className="h-full w-2/12 flex justify-center items-center cursor-pointer"><i className='bx bx-chevron-down text-xl text-gray-400 hover:text-gray-500' ></i></div>
                                </div>
                            </div>
                        })}
                        {/* filter icon*/}
                        <div className="h-full w-36 flex flex-col justify-center items-end">
                            <div className="h-10 w-full"></div>
                            <div className="border border-gray-200 h-10 w-10 flex justify-center items-center bg-gray-50 rounded-xl shadow-md cursor-pointer">
                                <i class='bx bx-slider text-2xl text-gray-400 hover:text-blue-400' ></i>
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

                    {/* TOP 10 TRENDING SECTION */}
                    <div className="border-2 border-yellow-600 h-auto w-10/12 mb-10">
                        {/* header title */}
                        <div className="border-2 border-black h-10 w-full flex">
                            <div className="border-2 border-red-600 h-full w-1/2 flex justify-start items-center text-lg font-semibold">TOP 10 MOVIES</div>
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