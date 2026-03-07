import FooterColumn from "./FooterComponents/FooterColumn";

function Footer(){

    // column row names
    const columnOne = ["Logout", "Donate", "AniList.co", "AniChart.net"];
    const columnTwo = ["Apps", "Site Stats", "Recommendations", "API"];
    const columnThree = ["Discord", "Twitter", "Bluesky", "Facebook", "GitHub"];
    const columnFour = ["Add Data", "Moderators", "Contact", "Terms & Privacy", "Site Map"];

    return(
        <>
            <div className="h-72 w-full flex bg-gray-900">

                {/* left side */}
                <div className="h-full w-1/2 flex justify-center items-center">
                    <div className="h-2/3 w-1/2">
                        <div className="text-lg text-blue-400 font-semibold">Site Theme</div>
                        <div className="mt-2">
                            <i className='bx bx-sun mr-4 text-white text-3xl rounded cursor-pointer' ></i>
                            <i className='bx bxs-moon mr-4 text-black text-3xl rounded cursor-pointer' ></i>
                            <i className='bx bx-moon mr-4 text-white text-3xl rounded cursor-pointer' ></i>
                            <i className='bx bxs-sun mr-4 text-black text-3xl rounded cursor-pointer' ></i>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="h-full w-1/2 flex justify-center items-center">
                    <FooterColumn column={columnOne} />
                    <FooterColumn column={columnTwo} />
                    <FooterColumn column={columnThree} />
                    <FooterColumn column={columnFour} />
                </div>

            </div>
        </>
    )
}

export default Footer;