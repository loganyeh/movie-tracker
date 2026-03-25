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
            <div className={`2xl:h-20 xl:h-16 w-full flex bg-gray-900 text-gray-300`}>

                {/* logo section */}
                <div className="h-full w-1/3 flex justify-center items-center">
                    <div className="h-full w-1/3 flex justify-center items-center">
                        <Link to={"/profile"}><img className="2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 cursor-pointer" src="../Letterboxd.jpeg" alt="" /></Link>
                    </div>
                </div>

                {/* nav section */}
                <div className="h-full w-1/3 flex justify-center items-center text-sm font-medium">
                    {navSectionData.map((data, index) => {
                        return <Link key={index} to={data.url} className="h-full w-1/6 flex justify-center items-center">
                            <span className="2xl:text-sm xl:text-xs cursor-pointer hover:text-white">{data.title}</span>
                        </Link>
                    })}
                </div>

                {/* profile settings section */}
                <div className="h-full w-1/3 flex justify-center items-center">
                    <div className="h-full w-1/2 flex justify-end items-center">
                        <Link to={"/"} className="2xl:h-12 2xl:w-12 2xl:mr-0 xl:mr-1 flex justify-center items-center"><i className='bx bx-search 2xl:text-2xl xl:text-xl cursor-pointer hover:text-white'></i></Link>
                        <div className="2xl:h-12 2xl:w-18 xl:h-10 xl:w-16 flex">
                            <img className="h-full w-2/3 rounded" src="../hanni.jpg" alt="" />
                            <div className="h-full w-1/3 flex justify-center items-center">
                                <i className='bx bx-chevron-down 2xl:text-2xl xl:text-xl' ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;