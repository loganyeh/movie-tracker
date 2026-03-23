import Header from "../Components/Header";

import Footer from "../Components/Footer";

// react router dom import
import { Link } from "react-router-dom";


function ProfilePage(){

    const middleNavTitles = ["Overview", "Anime List", "Manga List", "Favorites", "Stats", "Social", "Reviews", "Submissions"];

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
                        <div className="border border-red-600 h-full w-10/12 flex justify-center items-center">
                            {/* Left Side */}
                            <div className="border-2 border-yellow-500 h-96 w-1/2">
                                
                            </div>


                            {/* Right Side */}
                            <div className="border-2 border-green-500 h-96 w-1/2"></div>
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