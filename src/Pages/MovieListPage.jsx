// components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";

function MovieListPage(){
    const listCats = ["Watching", "Completed", "Paused", "Dropped", "Planning"];
    const filterBlockCats = ["Format", "Status", "Genres", "Country"];

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
                    <div className="border-2 border-red-600 h-auto w-10/12 flex justify-around items-start">

                        {/* left side */}
                        <div className="border h-auto w-2/12">

                            {/* filter search */}
                            <div className="h-10 w-full pl-2 mt-6 flex justify-start items-center text-gray-400 font-light bg-white shadow-md rounded">
                                <div className="mr-2 flex justify-center items-center"><i class='bx bx-search text-xl' ></i></div>
                                <div className="flex justify-center items-center">Filter</div>
                            </div>

                            {/* Lists */}
                            <div className="border border-red-600 h-auto w-full mt-6">
                                <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Lists</div>

                                {/* categorires for list */}
                                <div className="h-auto w-full flex flex-col justify-center items-center">
                                    <div className={`h-8 w-11/12 pl-2 my-2 flex justify-start items-center bg-white text-sm text-gray-400 shadow rounded`}>All</div>
                                        {listCats.map((cat, index) => {
                                            return <div key={index} className={`h-8 w-11/12 pl-2 my-2 flex justify-start items-center text-sm text-gray-400`}>{cat}</div>
                                        })}
                                </div>

                            </div>

                            {/* Filters */}
                            <div className="h-auto w-full mt-6">
                                <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Filter</div>

                                <div className="border border-red-600 h-auto w-full flex flex-col justify-center items-center">
                                    {filterBlockCats.map((cat, index) => {
                                        return <div key={index} className="border h-10 w-11/12 my-2 px-2 flex justify-between items-center bg-white font-light text-md text-gray-400 shadow rounded">
                                                    <div className="flex justify-center items-center">{cat}</div>
                                                    <div className="flex justify-center items-center"><i className='bx bx-chevron-down text-xl' ></i></div>
                                                </div>
                                    })}
                                </div>

                            </div>

                            {/* Year */}
                            <div className="h-auto w-full mt-6">
                                    <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Year</div>
                                    <div className="h-2 w-full flex justify-center items-center">
                                        <div className="border-2 border-blue-400 h-4 w-4 bg-white rounded-full"></div>
                                        <div className="h-2 w-full bg-white rounded-r"></div>
                                    </div>
                            </div>

                            {/* Sort */}
                            <div className="h-auto w-full mt-6">
                                <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Sort</div>

                                <div className="border border-red-600 h-auto w-full flex flex-col justify-center items-center">
                                    <div className="border h-10 w-11/12 my-2 px-2 flex justify-between items-center bg-white font-light text-md text-gray-400 shadow rounded">
                                        <div className="flex justify-center items-center">Score</div>
                                        <div className="flex justify-center items-center"><i className='bx bx-chevron-down text-xl' ></i></div>
                                    </div>
                                </div>

                            </div>

                            {/* Shuffle Button */}
                            <div className="border border-red-600 h-auto w-full mt-6">
                                <div className="h-10 w-10 flex justify-center items-center bg-blue-400 rounded">
                                    <i className='bx bx-shuffle text-white text-3xl' ></i>
                                </div>
                            </div>

                        </div>

                        
                        {/* right side */}
                        <div className="border-2 border-blue-600 h-96 w-9/12">

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