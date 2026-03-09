
function Header(){
    const navSectionTitles = ["Home", "Profile", "Anime List", "Manga List", "Browse", "Forum"];

    return(
        <>
            <div className="h-20 w-full flex bg-gray-900 text-gray-300">

                {/* logo section */}
                <div className="h-full w-1/3 flex justify-center items-center">
                    <div className="h-full w-1/3 flex justify-center items-center">
                        {/* <div className="border-2 border-white h-14 w-14 bg-white"></div> */}
                        <img className="h-16 w-16 cursor-pointer" src="../Letterboxd.jpeg" alt="" />
                    </div>
                </div>

                {/* nav section */}
                <div className="h-full w-1/3 flex justify-center items-center text-sm font-medium">
                    {navSectionTitles.map((title, index) => {
                        return <div key={index} className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">{title}</span></div>
                    })}
                </div>

                {/* profile settings section */}
                <div className="h-full w-1/3 flex justify-center items-center">
                    <div className="h-full w-1/2 flex justify-end items-center">
                        <div className="h-12 w-12 flex justify-center items-center"><i className='bx bx-search text-2xl cursor-pointer hover:text-white'></i></div>
                        <div className="h-12 w-18 flex cursor-pointer hover:text-white">
                            <img className="h-full w-2/3 rounded" src="../hanni.jpg" alt="" />
                            <div className="h-full w-1/3 flex justify-center items-center">
                                <i className='bx bx-chevron-down text-2xl' ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;