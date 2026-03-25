import Header from "../Components/Header";
import Footer from "../Components/Footer";

import ListStatus from "../Components/MovieListComps/ListStatus";

function ForumPage(){
    const feedData = ["Overview", "Recent Activity", "New Threads", "Subscribed", "Search"];
    const categoriesData = ["General", "Anime", "Manga", "Release Discussion", "Site Annoucements", 
        "News", "Music", "Gaming", "Visual Novels", "Light Novels", "Forum Games", "Recommendations",
        "Site Feedback", "Bug Reports", "AniList Apps", "Misc",
    ];

    return(
        <>
            <div className="border-2 border-red-600 h-screen w-screen">

                {/* header */}
                <Header />

                {/* body */}
                <div className="border-4 border-blue-600 h-auto w-full flex justify-center items-center bg-gray-200">
                    
                    {/* container */}
                    <div className="border-2 border-red-600 h-auto w-10/12 pb-96 flex justify-around items-start">

                        {/* left */}
                        <div className="border-2 border-green-400 h-full w-2/12 flex flex-col justify-center items-center">

                            {/* create thread */}
                            <div className="h-10 w-11/12 mt-6 flex justify-center items-center bg-blue-400 text-white font-light rounded-lg">Create Thread</div>

                            {/* search forum */}
                            <div className="h-10 w-11/12 mt-6 pl-4 flex justify-start items-center bg-white text-gray-500 font-light rounded">
                                <i className='bx bx-search text-xl' ></i>
                                <div className="ml-1">Search Forum</div>
                            </div>

                            {/* feed */}
                            <ListStatus title={"Feed"} category={feedData} />

                            {/* categories */}
                            <ListStatus title={"Categories"} category={categoriesData} />

                        </div>

                        {/* right */}
                        <div className="border-2 border-orange-400 h-auto w-9/12">

                            {/* threads */}
                            <div className="min-h-10 w-full mt-6 pb-2 flex flex-wrap justify-around items-center">
                                {Array.from({length: 9}).map((_, index) => {
                                    return <div key={index} className="h-auto w-5/12 mb-4 flex justify-between items-center bg-white rounded">

                                                {/* tweet */}
                                                <div className="h-10 w-auto flex">
                                                    <div className="h-10 w-10 flex justify-center items-center"><i className='bx bxs-pin text-blue-400 text-2xl' ></i></div>
                                                    <div className="h-10 w-auto flex justify-start items-center text-sm text-gray-500 font-medium">New User Intro Thread - Welcome!</div>
                                                </div>

                                                {/* views and comments */}
                                                <div className="h-10 w-auto flex mr-2">
                                                    <div className="h-full w-auto flex mr-4">
                                                        <div className="h-10 w-auto mr-1 flex justify-center items-center"><i className='bx bx-bar-chart-alt-2 text-gray-500 text-sm' ></i></div>
                                                        <div className="h-10 flex justify-center items-center text-xs text-gray-500 font-medium">1010239</div>
                                                    </div>
                                                    <div className="h-full w-auto flex">
                                                        <div className="h-10 w-auto mr-1 flex justify-center items-center"><i className='bx bx-chat text-gray-500 text-sm' ></i></div>
                                                        <div className="h-10 flex justify-center items-center text-xs text-gray-500 font-medium">21354</div>
                                                    </div>
                                                </div>
                                            </div>
                                })}
                            </div>

                            
                            {/* forum threads */}

                            {/* Recently Active Threads */}
                            {/* Release Discussion Threads */}
                            {/* Newly Created Threads */}





                        </div>

                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default ForumPage;