import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MovieInfoPage(){

    return(
        <>
            <div className="min-h-screen w-screen bg-gray-200">
                {/* header */}
                <Header />

                {/* body */}
                <div className="min-h-200 w-full">
                    {/* banner */}
                    <div className="h-80 w-full bg-blue-200"></div>

                    {/* poster and title */}
                    <div className="h-72 w-full flex bg-white shadow-md">
                        <div className="h-full w-1/4 flex flex-col justify-around items-center">
                            <div className="border border-black h-80 w-1/2 -mt-36 bg-gray-400 shadow-md rounded"></div>
                            <div className="h-14 w-1/2 flex justify-around items-start">
                                <div className="h-2/3 w-auto flex justify-center items-center text-gray-100">
                                    <span className="h-full w-27  flex justify-center items-center text-sm bg-blue-400 rounded-l">Add to List</span>
                                    <div className="h-full w-10 flex justify-center items-center bg-blue-300 rounded-r"><i className='bx bx-chevron-down text-2xl' ></i></div>
                                </div>
                                <div className="h-2/3 w-1/6 flex justify-center items-center bg-red-600 rounded"><i className='bx bxs-heart text-white text-2xl'></i></div>
                            </div>
                        </div>
                        <div className="h-full w-3/4 flex flex-col justify-center items-center">
                            <div className="h-10/12 w-full">
                                <div className="h-1/3 w-full flex justify-start items-center text-xl font-normal">Demon Slayer: Kimetsu no Yaiba</div>
                                <div className="h-2/3 w-5/6 flex justify-start items-start text-md font-light">
                                    It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. 
                                    To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, 
                                    Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.
                                </div>
                            </div>

                            <div className="h-2/12 w-2/3 flex justify-center items-center">
                                <div className="h-full w-full flex justify-between items-center">
                                    <div className="text-sm text-gray-500 font-semibold">Overview</div>
                                    <div className="text-sm text-gray-500 font-semibold">Watch</div>
                                    <div className="text-sm text-gray-500 font-semibold">Characters</div>
                                    <div className="text-sm text-gray-500 font-semibold">Staff</div>
                                    <div className="text-sm text-gray-500 font-semibold">Stats</div>
                                    <div className="text-sm text-gray-500 font-semibold">Review</div>
                                    <div className="text-sm text-gray-500 font-semibold">Social</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* info and stats */}
                    <div className="border-2 border-red-600 min-h-600 w-full pt-4 flex">

                        {/* left side */}
                        <div className="h-full w-1/4 flex flex-col justify-start items-center">

                            {/* rating */}
                            <div className="h-10 w-2/3 m-2 flex justify-center items-center text-sm font-medium bg-white shadow-md rounded-lg">
                                <div className="mr-2"><i className='bx bxs-star text-yellow-300 text-xl' ></i></div>
                                <div className="text-gray-600">#161 Highest Rated All Time</div>
                            </div>

                            {/* most popular */}
                            <div className="h-10 w-2/3 m-2 flex justify-center items-center text-sm font-medium bg-white shadow-md rounded-lg">
                                <div className="mr-2"><i className='bx bxs-heart text-red-500 text-xl' ></i></div>
                                <div className="text-gray-600">#2 Most Popular All Time</div>
                            </div>

                            {/* data stats and stuff */}
                            <div className="h-auto w-2/3 m-2 bg-white rounded-lg shadow-md">

                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Format</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">TV</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Episodes</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">26</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Episode Duration</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">24 Mins</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Status</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Finished</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Start Date</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Apr 6, 2019</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">End Date</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Sep 28, 2019</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Season</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Spring 2019</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Average Score</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">82%</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Mean Score</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">82%</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Popularity</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">909465</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Favorites</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">44833</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Studios</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">ufotable</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Format</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">TV</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Episodes</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">26</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Episode Duration</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">24 Mins</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Status</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Finished</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Start Date</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Apr 6, 2019</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">End Date</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Sep 28, 2019</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Season</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">Spring 2019</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Average Score</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">82%</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Mean Score</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">82%</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Popularity</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">909465</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Favorites</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">44833</div>
                                </div>
                                <div className="h-12 w-8/12 m-4">
                                    <div className="h-6 w-full flex justify-start items-center text-gray-600 text-md">Studios</div>
                                    <div className="h-6 w-full flex justify-start items-center text-gray-400 text-xs">ufotable</div>
                                </div>

                            </div>

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
                                <div className="border h-full w-1/2 flex flex-col justify-center items-start">

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
                                <div className="border h-full w-1/2 flex flex-col justify-center items-start">

                                    {/* reviews title */}
                                    <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Reviews</div>

                                    <div className="border border-red-600 min-h-20 w-full mb-6 flex justify-around items-center">
                                        <div className="border h-16 w-16 bg-blue-400 rounded"></div>
                                        <div className="border h-20 w-5/6 flex bg-white rounded shadow-md">
                                            <div className="border h-auto w-5/6 flex justify-center items-center">
                                                What if you had the ability to make your own Demon Slayer breathing style/form... 
                                                what would it be?
                                                What if you had the ability to make your own Demon Slayer breathing style/form... 
                                                what would it be?
                                                What if you had the ability to make your own Demon Slayer breathing style/form... 
                                                what would it be?
                                            </div>
                                            <div className="border-2 border-purple-600 h-full w-1/6">
                                                <div className="h-full w-full flex justify-center items-end">
                                                    <div className="border-2 border-blue-600 h-1/2 w-1/3 flex justify-center items-center"><i className='bx bx-like' ></i></div>
                                                    <div className="border-2 border-blue-600 h-1/2 w-2/3 flex justify-center items-center">1197</div>
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