import Header from "../Components/Header";

import Footer from "../Components/Footer";

// react router dom import
import { Link } from "react-router-dom";


function ProfilePage(){

    const middleNavTitles = ["Overview", "Anime List", "Manga List", "Favorites", "Stats", "Social", "Reviews", "Submissions"];
    const squareColors = ["bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-gray-200", "bg-gray-200", "bg-gray-200"];
    const genreOverviewData = [
        {genre: "Comedy", numOfEntries: 51, bgColor: "bg-green-500", textColor: "text-green-500", bar: "w-4/12"},
        {genre: "Action", numOfEntries: 46, bgColor: "bg-blue-500", textColor: "text-blue-500", bar: "w-3/12"},
        {genre: "Supernatural", numOfEntries: 38, bgColor: "bg-purple-500", textColor: "text-purple-500", bar: "w-2/12"},
        {genre: "Drama", numOfEntries: 33, bgColor: "bg-red-300", textColor: "text-red-300", bar: "w-2/12"},
        {genre: "Romance", numOfEntries: 31, bgColor: "bg-pink-500", textColor: "text-pink-500", bar: "w-1/12"},
    ]

    return(
        <>
            <div className="min-h-screen w-screen bg-gray-200">
                {/* --- HEADER */}
                <Header />

                {/* --- body */}
                <div className="border-2 border-red-600 h-auto w-full mb-8">

                    {/* - profile banner */}
                    <div className="h-64 w-full flex justify-center items-end shadow" style={{ backgroundImage: `url(public/newJeansBanner.jpg)`, backgroundSize: "cover", backgroundPosition: "center",}}>
                        <div className="min-h-1/2 w-10/12 flex justify-start items-end">
                            <div className="h-36 w-36 flex justify-center items-center">
                                <img className="rounded-t" src={`public/hanni.jpg`} alt="" />
                            </div>
                            <div className="h-12 min-w-32 flex justify-center items-center text-gray-700 text-2xl font-semibold">Hanni</div>
                        </div>
                    </div>
                    

                    {/* - midSection NavBar */}
                    <div className="h-12 w-full flex justify-center items-center bg-white shadow">
                        <div className="h-full w-8/12 flex justify-between items-center text-sm text-gray-600 font-semibold">
                            {middleNavTitles.map((title, index) => {
                                return <div key={index} >{title}</div>
                            })}
                        </div>
                    </div>

                    {/* -- Profile Page Stats */}
                    <div className="border-2 border-blue-600 h-auto w-full flex justify-center items-center">
                        
                        {/* Container */}
                        <div className="h-auto w-10/12 flex justify-center items-center">

                            {/* Left Side */}
                            <div className="h-auto w-1/2 flex flex-col justify-center items-center">

                                {/* - Active History */}
                                <div className="h-auto w-4/5 mt-4">
                                    <div className="h-10 w-full pl-2 flex justify-start items-center text-md text-gray-600 font-semibold">Active History</div>
                                    <div className="h-48 w-full flex flex-wrap justify-center items-center bg-white shadow-md rounded">
                                        {Array.from({length: 6}).map((_, index) => {
                                            const randomColor = squareColors[Math.floor(Math.random() * squareColors.length)];
                                            return <div key={index} className={`${randomColor} h-4 w-4 m-1 rounded-md`}></div>
                                        })}
                                    </div>
                                </div>

                                {/* - Genre Overview */}
                                <div className="h-auto w-4/5 mt-4">
                                    <div className="h-10 w-full pl-2 flex justify-start items-center text-md text-gray-600 font-semibold">Genre Overview</div>

                                    <div className="h-auto w-full flex flex-col bg-white shadow-md rounded">

                                        <div className="h-24 w-full flex">
                                            {genreOverviewData.map((genre, index) => {
                                                return <div key={index} className={`h-full w-1/5 flex flex-col justify-center items-center`}>
                                                            <div className={`h-8 w-10/12 flex justify-center items-center ${genre.bgColor} text-white text-sm font-normal rounded`}>{genre.genre}</div>
                                                            <div className={`mt-1 ${genre.textColor} text-sm`}>{genre.numOfEntries} <span className="text-xs text-gray-400">Entries</span></div>
                                                        </div>
                                            })}
                                        </div>

                                        <div className="h-2 w-full flex">
                                            {genreOverviewData.map((genre, index) => {
                                                return <div key={index} className={`h-full ${genre.bar} ${genre.bgColor}`}></div>
                                            })}
                                        </div>

                                    </div>
                                </div>

                                {/* - Anime FAVORITES */}
                                <div className="h-auto w-4/5 mt-4">
                                    <div className="h-10 w-full pl-2 flex justify-start items-center text-md text-gray-600 font-semibold">Anime</div>
                                    <div className="min-h-44 w-full flex flex-wrap justify-around items-center bg-white shadow-md rounded">
                                        {Array.from({length: 5}).map((_, index) => {
                                            return <div key={index} className="border h-32 w-24 m-3 rounded"></div>
                                        })}
                                    </div>
                                </div>

                                {/* - Character FAVORITES */}
                                <div className="h-auto w-4/5 mt-4">
                                    <div className="h-10 w-full pl-2 flex justify-start items-center text-md text-gray-600 font-semibold">Characters</div>
                                    <div className="min-h-44 w-full flex flex-wrap justify-around items-center bg-white shadow-md rounded">
                                        {Array.from({length: 8}).map((_, index) => {
                                            return <div key={index} className="border h-32 w-24 m-3 rounded"></div>
                                        })}
                                    </div>
                                </div>

                                    

                            </div>


                            {/* Right Side */}
                            <div className="border-2 border-green-500 min-h-96 w-1/2"></div>
                        </div>

                    </div>





                </div>


                {/* --- FOOTER */}
                <Footer />

            </div>
        
        </>
    )
}

export default ProfilePage;