import Header from "../Components/Header";
import Footer from "../Components/Footer";

// from MovieList comps
import ListStatus from "../Components/MovieListComps/ListStatus";

// comps
import PinComment from "../Components/ForumPageComps/PinComment";
import ThreadForumBlock from "../Components/ForumPageComps/ThreadForumBlock";

function ForumPage(){
    const feedData = ["Overview", "Recent Activity", "New Threads", "Subscribed", "Search"];
    const categoriesData = ["General", "Anime", "Manga", "Release Discussion", "Site Annoucements", 
        "News", "Music", "Gaming", "Visual Novels", "Light Novels", "Forum Games", "Recommendations",
        "Site Feedback", "Bug Reports", "AniList Apps", "Misc",
    ];

    return(
        <>
            <Header />

            <div className="flex justify-center bg-gray-200">

                {/* body */}
                <div className="w-full 2xl:max-w-[1400px] max-w-7xl p-5 md:p-8 xl:pb-28 flex gap-10 bg-gray-200">

                        {/* left */}
                        <div className="hidden w-full max-w-[210px] md:flex gap-6 flex-col">

                            {/* create thread */}
                            <div className="py-2.5 text-center bg-blue-400 text-sm text-white">Create Thread</div>

                            {/* search forum */}
                            <div className="py-3 pl-3 flex gap-2 justify-start items-center bg-white text-gray-400 font-light rounded">
                                <i className='bx bx-search text-xl' ></i>
                                <div className="text-sm">Search Forum</div>
                            </div>

                            {/* feed */}
                            <ListStatus title={"Feed"} category={feedData} />

                            {/* categories */}
                            <ListStatus title={"Categories"} category={categoriesData} />

                        </div>

                        {/* right */}
                        <div className="pb-16 flex-1 flex gap-8 flex-col">

                            <div className="md:hidden flex justify-between">
                                <div className="text-xl text-gray-600">Forum</div>
                                <i className='bx bx-dots-horizontal-rounded p-1 text-gray-600 text-3xl bg-white rounded' ></i>
                            </div>

                            <div className="md:hidden p-2.5 flex gap-2 items-center bg-white text-gray-500 font-light rounded">
                                <i className='bx bx-search' ></i>
                                <div className="text-sm">Search Forum</div>
                            </div>

                            {/* pin comment */}
                            <PinComment numOfPins={6} />

                            <ThreadForumBlock />

                        </div>


                </div>


            </div>


            <Footer />

        </>
    )
}

export default ForumPage;