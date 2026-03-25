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
    const threadsData = ["Recently Active Threads", "Release Discussion Threads", "Newly Created Threads"];

    return(
        <>
            <div className="h-screen w-screen">

                {/* header */}
                <Header />

                {/* body */}
                <div className="h-auto w-full flex justify-center items-center bg-gray-200">
                    
                    {/* container */}
                    <div className="h-auto w-10/12 pb-24 flex justify-around items-start">

                        {/* left */}
                        <div className="h-full w-2/12 flex flex-col justify-center items-center">

                            {/* create thread */}
                            <div className="h-10 w-11/12 mt-10 flex justify-center items-center bg-blue-400 text-white font-light rounded-lg">Create Thread</div>

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
                        <div className="h-auto w-9/12">
                            {/* pin comment */}
                            <PinComment numOfPins={6} />

                            {/* forum threads */}
                            {threadsData.map((thread, index) => {
                                return <ThreadForumBlock key={index} title={thread} />
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

export default ForumPage;