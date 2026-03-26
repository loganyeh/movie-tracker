import { Link } from "react-router-dom";

function MiddleNavBar(){
    const middleNavData = [
        {title: "Overview", url: "/profile"},
        {title: "Movie List", url: "/movielist"},
        {title: "TV List", url: "/movielist"},
        {title: "Favorites", url: "/favorites"},
        {title: "Stats", url: "/stats"},
        {title: "Social", url: "/social"},
        {title: "Review", url: "/reviews"},
        {title: "Submissions", url: "/submissions"},
    ];

    return(
        <>
            <div className="2xl:h-12 xl:h-10 w-full flex justify-center items-center bg-white shadow">
                <div className="h-full w-8/12 flex justify-between items-center text-sm text-gray-600 font-semibold">
                    {middleNavData.map((data, index) => {
                        return <Link key={index} to={data.url} className="cursor-pointer" ><span className="2xl:text-sm xl:text-xs hover:text-blue-400">{data.title}</span></Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default MiddleNavBar;