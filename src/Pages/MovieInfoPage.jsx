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
                    <div className="border border-red-600 h-72 w-full flex bg-white shadow-md">

                        {/* Poster and Toggle */}
                        <div className="border border-red-600 h-full w-1/4 flex flex-col justify-around items-center">
                            <InfoPoster />
                        </div>

                        {/* Movie Summary */}
                        <div className="border border-red-600 h-full w-3/4 flex flex-col justify-center items-center">
                            {/* Movie Description */}
                            <MovieDescription />

                            {/* Tabs */}
                            <Tabs />
                        </div>

                    </div>

                    {/* ------------------------------- */}

                    {/* info and stats */}
                    <div className="border-4 border-red-600 h-auto w-full pt-4 pb-16 flex">

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
                            <div className="border border-black min-h-40 w-11/12 mb-6">
                                <div className="h-10 flex justify-start items-center text-gray-600 text-lg font-semibold">Relations</div>
                                <div className="h-40 w-full flex justify-start items-center">
                                    <div className="border border-black h-full w-32 mr-12 rounded shadow-md"></div>
                                    <div className="border border-black h-full w-32 mr-12 rounded shadow-md"></div>
                                    <div className="border border-black h-full w-32 mr-12 rounded shadow-md"></div>
                                    <div className="border border-black h-full w-32 mr-12 rounded shadow-md"></div>
                                    <div className="border border-black h-full w-32 mr-12 rounded shadow-md"></div>
                                    <div className="border border-black h-full w-32 mr-12 rounded shadow-md"></div>
                                </div>
                            </div>

                            {/* characters */}
                            <div className="border border-black min-h-40 w-11/12 mb-6">
                                <div className="h-10 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Characters</div>
                                <div className="h-auto w-full flex flex-wrap justify-start items-center">
                                    {/* card */}
                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-2/4">
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-center items-start text-sm">Tanjirou Kamado</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-sm">Natsuki Hinae</div>
                                            </div>
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">Main</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">Japanese</div>
                                            </div>
                                        </div>
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                    </div>

                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-2/4">
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-center items-start text-sm">Tanjirou Kamado</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-sm">Natsuki Hinae</div>
                                            </div>
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">Main</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">Japanese</div>
                                            </div>
                                        </div>
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                    </div>

                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-2/4">
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-center items-start text-sm">Tanjirou Kamado</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-sm">Natsuki Hinae</div>
                                            </div>
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">Main</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">Japanese</div>
                                            </div>
                                        </div>
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                    </div>

                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-2/4">
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-center items-start text-sm">Tanjirou Kamado</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-sm">Natsuki Hinae</div>
                                            </div>
                                            <div className="h-1/2 w-full flex">
                                                <div className="h-full w-1/2 p-1 flex justify-start items-end text-xs">Main</div>
                                                <div className="h-full w-1/2 p-1 flex justify-end items-end text-xs">Japanese</div>
                                            </div>
                                        </div>
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                    </div>


                                </div>
                            </div>

                            {/* staff */}
                            <div className="min-h-40 w-11/12 mb-6">
                                <div className="h-10 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Staff</div>
                                <div className="h-auto w-full flex flex-wrap justify-start items-center">
                                    {/* card */}
                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                    <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* status distibution and score distrubution */}
                            <div className="border border-black h-auto w-11/12 mb-6 flex">
                                <div className="border h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* STATUS */}
                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Status Distribution</div>

                                    {/* color icons */}
                                    <div className="h-26 w-11/12 bg-white rounded shadow-md">

                                        {/* color title container */}
                                        <div className="h-11/12 w-full flex justify-around items-center">
                                            {/* completed */}
                                            <div className="h-full w-1/6">
                                                <div className="h-1/2 w-full flex justify-center items-end">
                                                    <div className="h-8/12 w-full flex justify-center items-center text-white text-md bg-green-500 rounded-md">Completed</div>
                                                </div>
                                                <div className="h-auto w-full mt-2 flex justify-center items-center"><span className="h-full mr-1 text-sm text-green-500">739395</span><span className="h-full text-xs">Users</span></div>
                                            </div>
                                            {/* planning */}
                                            <div className="h-full w-1/6">
                                                <div className="h-1/2 w-full flex justify-center items-end">
                                                    <div className="h-8/12 w-full flex justify-center items-center text-white text-md bg-blue-500 rounded-md">Planning</div>
                                                </div>
                                                <div className="h-auto w-full mt-2 flex justify-center items-center"><span className="h-full mr-1 text-sm text-blue-500">70084</span><span className="h-full text-xs">Users</span></div>
                                            </div>
                                            {/* current */}
                                            <div className="h-full w-1/6">
                                                <div className="h-1/2 w-full flex justify-center items-end">
                                                    <div className="h-8/12 w-full flex justify-center items-center text-white text-md bg-purple-500 rounded-md">Current</div>
                                                </div>
                                                <div className="h-auto w-full mt-2 flex justify-center items-center"><span className="h-full mr-1 text-sm text-purple-500">69333</span><span className="h-full text-xs">Users</span></div>
                                            </div>
                                            {/* paused */}
                                            <div className="h-full w-1/6">
                                                <div className="h-1/2 w-full flex justify-center items-end">
                                                    <div className="h-8/12 w-full flex justify-center items-center text-white text-md bg-pink-400 rounded-md">Paused</div>
                                                </div>
                                                <div className="h-auto w-full mt-2 flex justify-center items-center"><span className="h-full mr-1 text-sm text-pink-400">16242</span><span className="h-full text-xs">Users</span></div>
                                            </div>
                                            {/* dropped */}
                                            <div className="h-full w-1/6">
                                                <div className="h-1/2 w-full flex justify-center items-end">
                                                    <div className="h-8/12 w-full flex justify-center items-center text-white text-md bg-red-400 rounded-md">Dropped</div>
                                                </div>
                                                <div className="h-auto w-full mt-2 flex justify-center items-center"><span className="h-full mr-1 text-sm text-red-400">14653</span><span className="h-full text-xs">Users</span></div>
                                            </div>
                                        </div>

                                        {/* color bar */}
                                        <div className="h-1/12 w-full flex rounded-b">
                                            <div className="h-full w-8/12 bg-green-500"></div>
                                            <div className="h-full w-2/12 bg-blue-500"></div>
                                            <div className="h-full w-2/12 bg-purple-500"></div>
                                            <div className="h-full w-1/12 bg-pink-400"></div>
                                            <div className="h-full w-1/12 bg-red-400"></div>
                                        </div>
                                        
                                    </div>
                                </div>

                                {/* SCORE */}
                                <div className="border h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* distribution title */}
                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Score Distribution</div>

                                    {/* color icons */}
                                    <div className="border h-26 w-11/12 flex justify-around items-center bg-white rounded shadow-md">
                                        {/* 1 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-5 w-5 bg-red-500 rounded-full"></div>
                                        </div>
                                        {/* 2 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-5 w-5 bg-orange-700 rounded-full"></div>
                                        </div>
                                        {/* 3 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-5 w-5 bg-orange-500 rounded-full"></div>
                                        </div>
                                        {/* 4 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-5 w-5 bg-yellow-500 rounded-full"></div>
                                        </div>
                                        {/* 5 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-5 w-5 bg-yellow-500 rounded-full"></div>
                                        </div>
                                        {/* 6 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-7 w-5 bg-yellow-500 rounded-full"></div>
                                        </div>
                                        {/* 7 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-10 w-5 bg-green-500 rounded-full"></div>
                                        </div>
                                        {/* 8 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-14 w-5 bg-green-500 rounded-full"></div>
                                        </div>
                                        {/* 9 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-20 w-5 bg-green-500 rounded-full"></div>
                                        </div>
                                        {/* 10 */}
                                        <div className="h-full w-1/12 pb-2 flex justify-center items-end">
                                            <div className="h-12 w-5 bg-green-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* watch */}
                            <div className="border border-black h-auto w-11/12 mb-6 flex">
                                <div className="border h-full w-full flex flex-col justify-center items-start">

                                    {/* STATUS */}
                                    <div className="h-10 w-full flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Watch</div>
                                    <div className="border border-red-600 h-auto w-full flex flex-wrap items-center">
                                        <div className="border border-black h-32 w-1/4 mb-6 mr-8 bg-white rounded shadow-md">MOVIE PREVIEW/CLIPS/TRAILER</div>
                                        <div className="border border-black h-32 w-1/4 mb-6 mr-8 bg-white rounded shadow-md">MOVIE PREVIEW/CLIPS/TRAILER</div>
                                        <div className="border border-black h-32 w-1/4 mb-6 mr-8 bg-white rounded shadow-md">MOVIE PREVIEW/CLIPS/TRAILER</div>
                                        <div className="border border-black h-32 w-1/4 mb-6 mr-8 bg-white rounded shadow-md">MOVIE PREVIEW/CLIPS/TRAILER</div>
                                        <div className="border border-black h-32 w-1/4 mb-6 mr-8 bg-white rounded shadow-md">MOVIE PREVIEW/CLIPS/TRAILER</div>
                                    </div>

                                </div>

                                


                            </div>


                            {/* trailer */}
                            <div className="border border-black h-auto w-11/12 mb-6 flex">
                                <div className="border h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* trailer */}
                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold rounded">Trailer</div>
                                    <div className="border h-64 w-11/12 bg-white rounded"></div>
                                        
                                </div>

                                {/* Following */}
                                <div className="border h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* following title */}
                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Following</div>
                                    {/* profile card */}
                                    <div className="border h-auto w-full">
                                        <div className="h-10 w-full mb-2 flex justify-between items-center bg-white">
                                            <div className="border border-red-600 h-full min-w-1/3 max-width-1/2 flex">
                                                <div className="border h-10 w-10 flex justify-center items-center">
                                                    <div className="border h-8 w-8 bg-blue-400 rounded"></div>
                                                </div>
                                                <div className="border h-full min-w-14 flex justify-center items-center text-gray-600 font-medium">Rukia</div>
                                            </div>
                                            <div className="border border-red-600 h-full w-1/2 flex justify-center items-center">
                                                <div className="border h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">Completed</div>
                                                <div className="border h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">9/10</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* profile card */}
                                    <div className="border h-auto w-full">
                                        <div className="h-10 w-full mb-2 flex justify-between items-center bg-white">
                                            <div className="border border-red-600 h-full min-w-1/3 max-width-1/2 flex">
                                                <div className="border h-10 w-10 flex justify-center items-center">
                                                    <div className="border h-8 w-8 bg-blue-400 rounded"></div>
                                                </div>
                                                <div className="border h-full min-w-14 flex justify-center items-center text-gray-600 font-medium">Rukia</div>
                                            </div>
                                            <div className="border border-red-600 h-full w-1/2 flex justify-center items-center">
                                                <div className="border h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">Completed</div>
                                                <div className="border h-full w-1/2 flex justify-center items-center text-gray-600 font-normal">9/10</div>
                                            </div>
                                        </div>
                                    </div>


                                    </div>

                            </div>


                            {/* recsommendations */}
                            <div className="min-h-40 w-11/12 mb-6">
                                <div className="h-10 flex justify-start items-center text-gray-600 text-lg font-semibold">Relations</div>
                                {/* movie poster # 1 */}
                                <div className="border min-h-40 w-full flex flex-wrap justify-start items-center">
                                    <div className="min-h-48 w-32 mr-8">
                                        <div className="border h-40 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                                        <div className="h-10 w-full flex justify-start items-center text-gray-600 font-semibold">JJK</div>
                                    </div>
                                    <div className="min-h-48 w-32 mr-8">
                                        <div className="border h-40 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                                        <div className="h-10 w-full flex justify-start items-center text-gray-600 font-semibold">JJK</div>
                                    </div>
                                    <div className="min-h-48 w-32 mr-8">
                                        <div className="border h-40 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                                        <div className="h-10 w-full flex justify-start items-center text-gray-600 font-semibold">JJK</div>
                                    </div>
                                    <div className="min-h-48 w-32 mr-8">
                                        <div className="border h-40 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                                        <div className="h-10 w-full flex justify-start items-center text-gray-600 font-semibold">JJK</div>
                                    </div>
                                    <div className="min-h-48 w-32 mr-8">
                                        <div className="border h-40 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                                        <div className="h-10 w-full flex justify-start items-center text-gray-600 font-semibold">JJK</div>
                                    </div>
                                    <div className="min-h-48 w-32 mr-8">
                                        <div className="border h-40 w-full mr-12 bg-blue-300 rounded shadow-md"></div>
                                        <div className="h-10 w-full flex justify-start items-center text-gray-600 font-semibold">JJK</div>
                                    </div>
                                </div>
                            </div>

                            {/* threads and reviews */}
                            <div className="border h-auto w-11/12 mb-6 flex">
                                <div className="h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* threads */}
                                    <div className="h-10 w-11/12 flex justify-between items-center text-gray-600 text-lg font-semibold rounded">
                                        <div>Threads</div>
                                        <div className="text-sm font-light">Create New Thread</div>
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

                                    <div className="h-auto w-full mb-6 flex justify-around items-center">
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