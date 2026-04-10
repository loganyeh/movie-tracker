import { Link } from "react-router-dom";

function Header(){
    const navSectionData = [
        {title: "Home", url: "/movie"},
        {title: "Profile", url: "/profile"},
        {title: "Movie List", url: "/movielist"},
        {title: "TV List", url: "/movielist"},
        {title: "Browse", url: "/"},
        {title: "Forum", url: "/forum"},
    ];

    return(
        <>
            <div className={`py-3 hidden xl:flex justify-center bg-gray-900 text-gray-300`}>

                {/* controls width compared to parent's width */}
                <div className="w-full max-w-6xl flex justify-between">

                    {/* logo section */}
                    <Link to={"/profile"} className=""><img className="h-12 w-12 cursor-pointer" src="../Letterboxd.jpeg" alt="" /></Link>

                    {/* nav section */}
                    <div className="flex gap-12 items-center">
                        {navSectionData.map((data, index) => {
                            return <Link key={index} to={data.url} className="">
                                <div className="font-medium text-sm tracking-wide cursor-pointer hover:text-white">{data.title}</div>
                            </Link>
                        })}
                    </div>

                    {/* profile settings section */}
                    <div className="flex gap-3 items-center">
                        <Link to={"/"} className="flex"><i className='bx bx-search text-2xl cursor-pointer hover:text-white'></i></Link>
                        <img className="h-10 w-10 rounded" src="../hanni.jpg" alt="" />
                        <i className='bx bx-chevron-down text-2xl' ></i>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header;