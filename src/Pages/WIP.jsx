// components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar";

function WIP(){

    return(
        <>
            <div className="border-2 border-red-600 h-screen w-screen">

                {/* header */}
                <Header />

                {/* TEMPORARY middle nav */}
                <MiddleNavBar />

                {/* body */}
                <div className="border-2 border-blue-600 h-full w-full flex justify-center items-center text-4xl">
                    WIP
                </div>

                {/* footer */}
                <Footer />

            </div>
        
        </>
    )
}

export default WIP;