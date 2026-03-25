// hooks
import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";

// api 
import { Link } from "react-router-dom";

function Poster({ data }){
    const { movieID, setMovieID } = useContext(MyContext);
    const bubbleColors = ["hover:text-green-400", "hover:text-red-400", "hover:text-pink-400", "hover:text-red-500", "hover:text-red-400", "hover:text-blue-500"];

    async function handleClick(){
        setMovieID(data?.id);
    }

    return(
        <>
            <div className="2xl:h-80 xl:h-72 w-1/6 flex flex-col justify-around items-center">
                <Link to={`/movie`} onClick={handleClick} className="h-10/12 2xl:w-9/12 xl:w-10/12 bg-white rounded-md">
                    <img className="h-full w-full rounded-md cursor-pointer" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                </Link>
                <div className="h-10 w-full flex justify-center items-center font-medium">
                    <div className="h-full w-10/12 2xl:mt-2 xl:mt-4 text-gray-500 text-md flex justify-center items-center">
                        <Link to={"/movie"} onClick={handleClick}>
                            <span className={`${bubbleColors[data?.key]} cursor-pointer`}>{data.title}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;