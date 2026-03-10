import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MovieInfoPage(){

    return(
        <>
            <div className="min-h-screen w-screen bg-gray-200">
                {/* header */}
                <Header />

                {/* body */}
                <div className="border-2 border-red-600 min-h-200 w-full">
                    {/* banner */}
                    <div className="border-2 border-red-600 h-80 w-full"></div>

                    {/* poster and title */}
                    <div className="border-2 border-red-600 h-72 w-full flex">
                        <div className="border-2 border-black h-full w-1/3 flex flex-col justify-between items-center">
                            <div className="border-2 border-red-600 h-90 w-5/12 -mt-45"></div>
                            <div className="border-2 border-blue-600 h-16 w-5/12 -mt-10">
                                <div>Add to List</div>
                                <div><i class='bx bx-heart'></i></div>
                            </div>
                        </div>
                        <div className="border-2 border-black h-full w-2/3">
                            <div className="border-2 border-red-600 h-10/12 w-full">
                                <div>Demon Slayer: Kimetsu no Yaiba</div>
                                <div>SHOW TEXT stuff</div>
                            </div>
                            <div className="border-2 border-red-600 h-2/12 flex justify-around items-center">
                                <div>Overview</div>
                                <div>Watch</div>
                                <div>Characters</div>
                                <div>Staff</div>
                                <div>Stats</div>
                                <div>Social</div>
                            </div>
                        </div>
                    </div>

                    {/* info and stats */}
                    <div className="border-2 border-red-600 h-600 w-full flex">

                        {/* left side */}
                        <div className="border-2 border-black h-full w-1/5 flex flex-col justify-around items-center">

                            {/* rating */}
                            <div className="border-2 border-black h-20 w-full">rating</div>

                            {/* most popular */}
                            <div className="border-2 border-black h-20 w-full">most popular</div>

                            {/* data stats and stuff */}
                            <div className="border-2 border-black h-300 w-full"></div>

                        </div>

                        {/* right side */}
                        <div className="border-2 border-black h-full w-4/5">

                            {/* relations */}
                            <div className="border border-black h-40 w-full">relations</div>

                            {/* characters */}
                            <div className="border border-black h-40 w-full">characters</div>

                            {/* staff */}
                            <div className="border border-black h-40 w-full">staff</div>

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