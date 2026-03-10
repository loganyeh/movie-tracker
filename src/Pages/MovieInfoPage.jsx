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
                    <div className="border-2 border-red-600 h-72 w-full">
                        
                    </div>

                    {/* info and stats */}
                    <div className="border-2 border-red-600 h-600 w-full"></div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        
        </>
    )
}

export default MovieInfoPage;