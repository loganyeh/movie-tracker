import { Link } from "react-router-dom";

function Poster({ data }){
    const bubbleColors = ["hover:text-green-400", "hover:text-red-400", "hover:text-pink-400", "hover:text-red-500", "hover:text-red-400", "hover:text-blue-500"];

    // create a function with the click that it changes the data set like it goes to query and changes the data
    // that then changes the data in movieinfopage
    function handleOnClick(){
        console.log(`clicked ${data.title}`);
    }

    return(
        <>
            <div className="h-86 w-1/6 flex flex-col justify-around items-center mb-2">
                <Link to={"/movie"} onClick={handleOnClick} className="border-2 border-red-600 h-10/12 w-10/12 bg-white rounded-md">
                    <img className="h-full w-full rounded-md cursor-pointer" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                </Link>
                {/* <div onClick={handleOnClick} className="border-2 border-red-600 h-10/12 w-10/12 bg-white rounded-md">
                    <img className="h-full w-full rounded-md cursor-pointer" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                </div> */}
                <div className="h-1/12 w-full flex justify-center items-center font-medium">
                    <div className="h-full w-10/12 text-gray-500 text-md flex justify-center items-center">
                        <span className={`${bubbleColors[data.key]} cursor-pointer`}>{data.title}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;