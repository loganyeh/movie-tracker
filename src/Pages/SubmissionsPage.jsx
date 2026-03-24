import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";

function SubmissionsPage(){

    return(
        <>
            <div className="border-2 border-red-600 h-screen w-screen">

                {/* header */}
                <Header />

                {/* TEMPORARY middle nav */}
                <MiddleNavBar />

                {/* body */}
                <div className="border-2 border-blue-600 h-auto w-full flex justify-center items-center bg-gray-200">
                    
                    {/* container */}
                    <div className="border h-96 w-10/12 flex justify-around items-center">

                        {/* left */}
                        <div className="border-2 border-green-400 h-full w-2/12">Submissions</div>

                        {/* right */}
                        <div className="border-2 border-orange-400 h-full w-9/12"></div>

                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default SubmissionsPage;