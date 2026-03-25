import { Link } from "react-router-dom";

function Header(){
    const navSectionData = [
        {title: "Home", url: "/movie"},
        {title: "Profile", url: "/profile"},
        {title: "Movie List", url: "/movielist"},
        {title: "TV List", url: "/movielist"},
        {title: "Browse", url: "/"},
        {title: "Forum", url: "/forum"},
    ]

    return(
        <>
            <div className="h-20 w-full flex bg-gray-900 text-gray-300">

                {/* logo section */}
                <div className="h-full w-1/3 flex justify-center items-center">
                    <div className="h-full w-1/3 flex justify-center items-center">
                        {/* <div className="border-2 border-white h-14 w-14 bg-white"></div> */}
                        <Link to={"/profile"}><img className="h-16 w-16 cursor-pointer" src="../Letterboxd.jpeg" alt="" /></Link>
                        {/* <div><img className="h-16 w-16" src="../Letterboxd.jpeg" alt="logo.jpg" /></div> */}
                    </div>
                </div>

                {/* nav section */}
                <div className="h-full w-1/3 flex justify-center items-center text-sm font-medium">
                    {navSectionData.map((data, index) => {
                        return <Link key={index} to={data.url} className="h-full w-1/6 flex justify-center items-center">
                            <span className="cursor-pointer hover:text-white">{data.title}</span>
                        </Link>
                        // <div key={index} className="h-full w-1/6 flex justify-center items-center"><span className="cursor-pointer hover:text-white">{title}</span></div>
                    })}
                </div>

                {/* profile settings section */}
                <div className="h-full w-1/3 flex justify-center items-center">
                    <div className="h-full w-1/2 flex justify-end items-center">
                        <Link to={"/"} className="h-12 w-12 flex justify-center items-center"><i className='bx bx-search text-2xl cursor-pointer hover:text-white'></i></Link>
                        {/* <div className="h-12 w-12 flex justify-center items-center"><i className='bx bx-search text-2xl'></i></div> */}
                        {/* <div className="h-12 w-12 flex justify-center items-center"><i className='bx bx-search text-2xl cursor-pointer hover:text-white'></i></div> */}
                        <div className="h-12 w-18 flex">
                        {/* <div className="h-12 w-18 flex cursor-pointer hover:text-white"> */}
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