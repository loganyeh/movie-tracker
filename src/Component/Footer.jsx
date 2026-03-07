
function Footer(){

    const columnOne = ["Logout", "Donate", "AniList.co", "AniChart.net"];
    const columnTwo = ["Apps", "Site Stats", "Recommendations", "API"];
    const columnThree = ["Discord", "Twitter", "Bluesky", "Facebook", "GitHub"];
    const columnFour = ["Add Data", "Moderators", "Contact", "Terms & Privacy", "Site Map"];


    return(
        <>
            <div className="border-2 border-red-600 h-72 w-full flex">

                {/* left side */}
                <div className="border-2 border-black h-full w-1/2 flex justify-center items-center">
                    <div className="border-2 border-black h-2/3 w-1/2">
                        <div className="border border-red-600 text-lg font-semibold">Site Theme</div>
                        <div className="border border-red-600">
                            <i className='bx bx-sun border border-black mr-4 text-3xl' ></i>
                            <i className='bx bxs-moon border border-black mr-4 text-3xl' ></i>
                            <i className='bx bx-moon border border-black mr-4 text-3xl' ></i>
                            <i className='bx bxs-sun border border-black mr-4 text-3xl' ></i>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="border-2 border-black h-full w-1/2 flex justify-center items-center">
                    <div className="border border-red-600 h-2/3 w-1/4">
                        <div className="text-md font-medium mb-3">Logout</div>
                        <div className="text-md font-medium mb-3">Donate</div>
                        <div className="text-md font-medium mb-3">AniList.co</div>
                        <div className="text-md font-medium mb-3">AniChart.net</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;