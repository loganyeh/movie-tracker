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
                    <div className="h-72 w-full flex bg-white shadow-lg">
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
                    <div className="border-2 border-blue-600 h-600 w-full pt-4 flex">

                        {/* left side */}
                        <div className="border-2 border-black h-full w-1/4 flex flex-col justify-start items-center">

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
                        <div className="border-2 border-black h-full w-3/4">

                            {/* relations */}
                            <div className="border border-black min-h-40 w-11/12 mb-6">
                                <div className="border border-blue-600 h-10 flex justify-start items-center text-gray-600 text-lg font-semibold">Relations</div>
                                <div className="border border-red-600 h-40 w-full flex justify-start items-center">
                                    <div className="border border-black h-full w-32 mr-6 rounded"></div>
                                    <div className="border border-black h-full w-32 mr-6 rounded"></div>
                                    <div className="border border-black h-full w-32 mr-6 rounded"></div>
                                    <div className="border border-black h-full w-32 mr-6 rounded"></div>
                                    <div className="border border-black h-full w-32 mr-6 rounded"></div>
                                    <div className="border border-black h-full w-32 mr-6 rounded"></div>
                                </div>
                            </div>

                            {/* characters */}
                            <div className="min-h-40 w-11/12 mb-6">
                                <div className="h-10 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Characters</div>
                                <div className="border border-red-600 h-auto w-full flex flex-wrap justify-start items-center">
                                    {/* card */}
                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
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

                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
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

                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
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

                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
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
                                <div className="border border-red-600 h-auto w-full flex flex-wrap justify-start items-center">
                                    {/* card */}
                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                    <div className="h-25 w-80 mr-4 mb-6 flex bg-white rounded">
                                        <div className="h-full w-1/4 bg-blue-300"></div>
                                        <div className="h-full w-3/4 ">
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">Author</div>
                                            <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">Original Creator</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* status distibution and score distrubution */}
                            <div className="border border-black h-40 w-full">status and score</div>

                            {/* watch */}
                            <div className="border border-black h-40 w-full">watch</div>

                            {/* trailer */}
                            <div className="border border-black h-40 w-full">trailer</div>

                            {/* recsommendations */}
                            <div className="border border-black h-40 w-full">reccommendations</div>

                            {/* threads and reviews */}
                            <div className="border border-black h-40 w-full">threads and reviews</div>



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