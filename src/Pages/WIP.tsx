// components
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import MiddleNavBar from "../Components/ProfilePageComps/MiddleNavBar.js";

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