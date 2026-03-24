import { Link } from "react-router-dom";


function MiddleNavBar(){
    const middleNavData = [
        {title: "Overview", url: "/profile"},
        {title: "Movie List", url: "/browse"},
        {title: "TV List", url: "/browse"},
        {title: "Favorites", url: "/profile"},
        {title: "Stats", url: "/profile"},
        {title: "Social", url: "/profile"},
        {title: "Review", url: "/profile"},
        {title: "Submissions", url: "/profile"},
    ]

    return(
        <>
            <div className="h-12 w-full flex justify-center items-center bg-white shadow">
                <div className="h-full w-8/12 flex justify-between items-center text-sm text-gray-600 font-semibold">
                    {middleNavData.map((data, index) => {
                        return <Link key={index} to={data.url} className="cursor-pointer" ><span className="hover:text-blue-400">{data.title}</span></Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default MiddleNavBar;