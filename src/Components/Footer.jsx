import FooterColumn from "./FooterComponents/FooterColumn";

function Footer(){

    // column row names
    const columnOne = ["Logout", "Donate", "AniList.co", "AniChart.net"];
    const columnTwo = ["Apps", "Site Stats", "Recommendations", "API"];
    const columnThree = ["Discord", "Twitter", "Bluesky", "Facebook", "GitHub"];
    const columnFour = ["Add Data", "Moderators", "Contact", "Terms & Privacy", "Site Map"];

    return(
        <>
            <div className="border px-8 py-6 xl:py-16 xl:flex xl:justify-center bg-gray-900">
            {/* <div className="2xl:h-72 xl:h-64 w-full flex bg-gray-900"> */}

                <div className="w-full max-w-7xl flex flex-col xl:flex-row xl:justify-between gap-6">

                    {/* screen color */}
                    <div className="flex flex-col gap-4">
                        {/* text */}
                        <div className="text-blue-400 font-semibold">Site Theme</div>

                        {/* boxes */}
                        <div className="flex gap-3.5 text-2xl">
                            <i className='bx bx-sun border-2 border-gray-600 text-white bg-black rounded' ></i>
                            <i className='bx bxs-moon border-2 border-gray-600 text-black bg-white rounded' ></i>
                            <i className='bx bx-moon border-2 border-gray-600 text-white bg-black rounded' ></i>
                            <i className='bx bxs-sun border-2 border-gray-600 text-black bg-white rounded' ></i>
                        </div>
                    </div>

                    {/* Right Side - Footer Column */}
                    <div className="flex flex-col xl:grid xl:grid-cols-4 gap-8 xl:gap-16">
                        <FooterColumn column={columnOne} />
                        <FooterColumn column={columnTwo} />
                        <FooterColumn column={columnThree} />
                        <FooterColumn column={columnFour} />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer;