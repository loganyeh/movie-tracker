import Header from "../Components/Header";
import Footer from "../Components/Footer";

// header
import InfoPoster from "../Components/MovieInfoPageComps/InfoPoster";
import MovieDescription from "../Components/MovieInfoPageComps/MovieDescription";
import Tabs from "../Components/MovieInfoPageComps/Tabs";

// body
import AllTimeStat from "../Components/MovieInfoPageComps/AllTimeStat";
import MovieColumnDetails from "../Components/MovieInfoPageComps/MovieColumnDetails";
import Tags from "../Components/MovieInfoPageComps/Tags";
import EditComment from "../Components/MovieInfoPageComps/EditComment";
import SocialMedia from "../Components/MovieInfoPageComps/SocialMedia";

// body - right side - info blocks
import Relations from "../Components/MovieInfoPageComps/InfoCards/Relations";
import Characters from "../Components/MovieInfoPageComps/InfoCards/Characters";
import Staff from "../Components/MovieInfoPageComps/InfoCards/Staff";
import Distribution from "../Components/MovieInfoPageComps/Distribution";
import Watch from "../Components/MovieInfoPageComps/InfoCards/Watch";


function MovieInfoPage({ data }){
    
    const tabNames = ["Overview", "Watch", "Characters", "Staff", "Stats", "Review", "Social"];

    return(
        <>
            <div className="min-h-screen w-screen bg-gray-200">
                {/* header */}
                <Header />

                {/* body */}
                <div className="min-h-200 w-full">
                    {/* Movie Banner */}
                    <div className="h-80 w-full bg-blue-200"></div>

                    {/* Movie Info Description */}
                    <div className="h-72 w-full flex bg-white shadow-md">

                        {/* Poster and Toggle */}
                        <div className="h-full w-1/4 flex flex-col justify-around items-center">
                            <InfoPoster />
                        </div>

                        {/* Movie Summary */}
                        <div className="h-full w-3/4 flex flex-col justify-center items-center">
                            {/* Movie Description */}
                            <MovieDescription />

                            {/* Tabs */}
                            <Tabs />
                        </div>

                    </div>

                    {/* ------------------------------- */}

                    {/* info and stats */}
                    <div className="h-auto w-full pt-4 pb-16 flex">

                        {/* Column Stats/Info */}
                        <div className="h-full w-1/4 flex flex-col justify-start items-center">

                            {/* All Time Stats - highest rated & most popular */}
                            <AllTimeStat boxicon={<i className='bx bxs-star text-yellow-300 text-xl' ></i>} ranking={"161"} text={"Highest Rated"} />
                            <AllTimeStat boxicon={<i className='bx bxs-heart text-red-500 text-xl' ></i>} ranking={"2"} text={"Most Popular"} />

                            {/* Movie Column Details */}
                            <MovieColumnDetails />

                            {/* Tags */}
                            <Tags />

                            {/* Write/Edit Comment */}
                            <EditComment />

                            {/* Social Media */}
                            <SocialMedia />
                            
                        </div>

                        {/* right side */}
                        <div className="h-full w-3/4">

                            {/* relations */}
                            <Relations />

                            {/* characters */}
                            <Characters />

                            {/* staff */}
                            <Staff />

                            {/* status distibution and score distrubution */}
                            <Distribution />

                            {/* watch */}
                            <Watch />


                            {/* trailer */}
                            <div className="h-auto w-11/12 mb-6 flex">

                                {/* trailer */}
                                <div className="h-full w-1/2 flex flex-col justify-center items-start">

                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold rounded">Trailer</div>
                                    <div className="h-64 w-11/12 flex justify-center items-center bg-blue-300 rounded">
                                        <div className="h-auto w-auto flex justify-center items-center">
                                            <i className='bx bx-play-circle text-6xl hover:text-red-500 cursor-pointer'></i>
                                        </div>
                                    </div>
                                        
                                </div>

                                {/* Following */}
                                <div className="h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* following title */}
                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Following</div>
                                    {/* profile card */}
                                    <div className="h-auto w-full">
                                        <div className="h-12 w-full mb-2 flex justify-between items-center bg-white">
                                            <div className="h-full min-w-1/3 max-width-1/2 flex justify-start items-center">
                                                <div className="h-10 w-10 flex justify-center items-center">
                                                    <div className="h-8 w-8 bg-blue-400 rounded"></div>
                                                </div>
                                                <div className="h-full min-w-14 flex justify-center items-center text-gray-600 font-medium">Rukia</div>
                                            </div>
                                            <div className="h-full w-1/2 flex justify-center items-center">
                                                <div className="h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">Completed</div>
                                                <div className="h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">9/10</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            {/* recommendations */}
                            <div className="min-h-40 w-11/12 mb-6">
                                <div className="h-10 flex justify-start items-center text-gray-600 text-lg font-semibold">
                                    <div className="h-full w-1/2 flex justify-start items-center">Recommendations</div>
                                    <div className="h-full w-1/2 flex justify-end items-center">
                                        <div className="h-full w-1/3 flex justify-between items-center">
                                            <div className="h-full w-auto flex justify-center items-center font-medium text-xs">+Add</div>
                                            <div className="h-full w-auto flex justify-center items-center font-medium text-xs">View All Recommendations</div>
                                        </div>
                                    </div>
                                </div>
                                {/* movie poster # 1 */}
                                <div className="min-h-40 w-full flex flex-wrap justify-start items-center">
                                    <div className="min-h-48 w-36 mr-8">
                                        <div className="h-48 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                                        <div className="h-10 w-full flex justify-start items-center text-sm text-gray-600 font-semibold">JJK</div>
                                    </div>
                                </div>
                            </div>

                            {/* threads and reviews */}
                            <div className="border h-auto w-11/12 mb-6 flex">
                                <div className="h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* threads */}
                                    <div className="h-10 w-11/12 flex justify-between items-center text-gray-600 text-lg font-semibold rounded">
                                        <div>Threads</div>
                                        <div className="text-xs font-light">Create New Thread</div>
                                    </div>
                                    

                                    {/*  */}
                                    <div className="h-auto w-11/12">

                                        <div className="h-auto w-full flex mb-6 bg-white rounded shadow-md">
                                            <div className="min-h-32 w-4/5">
                                                <div className="min-h-2/3 w-full p-2 flex justify-center items-center text-sm">
                                                    What if you had the ability to make your own Demon Slayer breathing style/form... 
                                                    what would it be?
                                                </div>
                                                <div className="h-10 w-full flex justify-start items-center">
                                                    <div className="h-8 w-8 mx-3 bg-blue-300 rounded"></div>
                                                    <div className="h-full w-auto flex justify-center items-center text-sm">Rukia replied 3 months ago</div>
                                                </div>
                                            </div>
                                            <div className="min-h-32 w-1/5 flex flex-col justify-between items-center">
                                                <div className="h-16 w-full">
                                                    <div className="h-full w-full flex justify-around items-center">
                                                        <div className="h-auto w-auto flex justify-center items-center">
                                                            <i className='bx bxs-bar-chart-alt-2 mr-1 text-2xl text-gray-400' ></i>
                                                            <span className="text-gray-400">120</span>
                                                        </div>
                                                        <div className="h-auto w-auto flex justify-center items-center">
                                                            <i className='bx bx-chat mr-1 text-2xl text-gray-500' ></i>
                                                            <span className="text-gray-400">3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-16 w-full flex justify-center items-center">
                                                    <div className="h-2/5 w-auto px-2 flex justify-center items-center bg-blue-400 text-white text-sm font-normal rounded-xl">general</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                        
                                </div>

                                {/* Following */}
                                <div className="h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* reviews title */}
                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Reviews</div>

                                    <div className="h-auto w-full mb-6 flex justify-between items-center">
                                        <div className="h-16 w-16 bg-blue-400 rounded"></div>
                                        <div className="h-auto w-5/6 flex bg-white rounded shadow-md">
                                            <div className="min-h-20 w-5/6 p-2 flex justify-center items-center text-gray-600">
                                                What if you had the ability to make your own Demon Slayer breathing style/form... 
                                                what would it be?
                                            </div>
                                            <div className="bmin-h-20 w-1/6">
                                                <div className="h-full w-full flex justify-center items-end">
                                                    <div className="h-10 w-1/3 flex justify-center items-center"><i className='bx bx-like' ></i></div>
                                                    <div className="h-10 w-2/3 pl-2 flex justify-start items-center">1197</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </div>

                            </div>




                        </div>

                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        
        </>
    )
}

export default MovieInfoPage;