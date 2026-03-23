import Header from "../Components/Header";

import Footer from "../Components/Footer";

// pics


function ProfilePage(){

    return(
        <>
            <div className="h-screen w-screen">
                {/* --- HEADER */}
                <Header />

                {/* --- body */}
                <div className="h-full w-full mb-8">

                    {/* - profile banner */}
                    <div
                        className="border-2 border-blue-600 h-64 w-full"
                        style={{
                            backgroundImage: `url(public/newJeansBanner.jpg)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                        {/* <img src="../newJeansBanner.jpg" alt="New Jeans Banner" className="w-full h-auto" /> */}

                </div>


                {/* --- FOOTER */}
                <Footer />

            </div>
        
        </>
    )
}

export default ProfilePage;