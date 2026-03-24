// components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileBanner from "../Components/ProfilePageComps/ProfileBanner";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";

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
                            <div className="h-10 w-11/12 pl-2 ml-2 mt-6 flex justify-start items-center text-gray-400 font-light bg-white shadow-md rounded">
                                <div className="mr-2 flex justify-center items-center"><i class='bx bx-search text-xl' ></i></div>
                                <div className="flex justify-center items-center">Filter</div>
                            </div>

                            {/* Lists */}
                            <div className="h-auto w-full mt-6">
                                <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Lists</div>

                                {/* categorires for list */}
                                <div className="h-auto w-full flex flex-col justify-center items-center">
                                    <div className={`h-8 w-11/12 pl-2 my-2 flex justify-start items-center bg-white text-sm text-gray-400 shadow rounded`}>All</div>
                                        {listCats.map((cat, index) => {
                                            return <div key={index} className={`h-8 w-11/12 pl-2 my-1 flex justify-start items-center text-sm text-gray-400`}>{cat}</div>
                                        })}
                                </div>

                            </div>

                            {/* Filters */}
                            <div className="h-auto w-full mt-6">
                                <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Filter</div>

                                <div className="h-auto w-full flex flex-col justify-center items-center">
                                    {filterBlockCats.map((cat, index) => {
                                        return <div key={index} className="h-8 w-11/12 my-2 px-2 flex justify-between items-center bg-white font-light text-sm text-gray-400 shadow rounded">
                                                    <div className="flex justify-center items-center">{cat}</div>
                                                    <div className="flex justify-center items-center"><i className='bx bx-chevron-down text-xl' ></i></div>
                                                </div>
                                    })}
                                </div>

                            </div>

                            {/* Year */}
                            <div className="h-auto w-full mt-6">
                                    <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Year</div>
                                    <div className="h-2 w-11/12 pl-3 flex justify-center items-center">
                                        <div className="border-2 border-blue-400 h-4 w-4 bg-white rounded-full"></div>
                                        <div className="h-2 w-full bg-white rounded-r"></div>
                                    </div>
                            </div>

                            {/* Sort */}
                            <div className="h-auto w-full mt-6">
                                <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Sort</div>

                                <div className="h-auto w-full flex flex-col justify-center items-center">
                                    <div className="h-8 w-11/12 my-2 px-2 flex justify-between items-center bg-white font-light text-md text-gray-400 shadow rounded">
                                        <div className="flex justify-center items-center text-sm">Score</div>
                                        <div className="flex justify-center items-center"><i className='bx bx-chevron-down text-xl' ></i></div>
                                    </div>
                                </div>

                            </div>

                            {/* Shuffle Button */}
                            <div className="h-auto w-full mt-6 pl-3">
                                <div className="h-8 w-8 flex justify-center items-center bg-blue-400 rounded">
                                    <i className='bx bx-shuffle text-white text-2xl' ></i>
                                </div>
                            </div>

                        </div>

                        
                        {/* right side */}
                        <div className="h-auto w-9/12">
                            
                            {/* BLOCKS */}
                            {/* watching block */}
                            {blockTitles.map((block, index) => {
                                return <div key={index} className="h-auto w-full mt-8">
                                            <div className="h-12 w-full pl-6 flex justify-start items-center text-xl font-normal text-gray-600">{block}</div>

                                            {/* block body */}
                                            <div className="min-h-10 w-full bg-white shadow rounded">
                                                <div className="h-10 w-full flex justify-center items-center">
                                                    <div className="h-full w-6/12 pl-16 flex justify-start items-center text-gray-700 font-medium">Title</div>
                                                    <div className="h-full w-2/12 flex justify-center items-center text-gray-700 font-medium">Score</div>
                                                    <div className="h-full w-2/12 flex justify-center items-center text-gray-700 font-medium">Progress</div>
                                                    <div className="h-full w-2/12 flex justify-center items-center text-gray-700 font-medium">Type</div>
                                                </div>
                                                
                                                {Array.from({length: 4}).map((_, index) => {
                                                    return <div key={index} className="h-14 w-full flex">
                                                                <div className="h-full w-6/12 flex justify-start items-center">
                                                                    <div className="h-10 w-10 ml-2 bg-blue-400 rounded"></div>
                                                                    <div className="ml-2 text-gray-600 text-sm font-light">Bleach</div>
                                                                </div>
                                                                <div className="h-full w-2/12 flex justify-center items-center text-gray-600 text-sm">8/10</div>
                                                                <div className="h-full w-2/12 flex justify-center items-center text-gray-600 text-sm">20/366</div>
                                                                <div className="h-full w-2/12 flex justify-center items-center text-gray-600 text-sm">TV</div>
                                                            </div>
                                                })}
                                            </div>


                                        </div>
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