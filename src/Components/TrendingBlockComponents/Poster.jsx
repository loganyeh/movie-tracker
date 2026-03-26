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
            <div className="h-auto w-1/6 flex flex-col justify-start items-center">
                <Link to={`/movie`} onClick={handleClick} className="h-auto w-9/12 bg-white rounded-md">
                    <img className="2xl:h-72 xl:h-56 w-full rounded-md cursor-pointer" src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt={`${data.title}.jpg`} />
                </Link>
                <div className="min-h-8 w-full 2xl:my-2 xl:my-1 flex justify-center items-center font-medium">
                    <div className="h-auto w-10/12 text-gray-500 text-md flex justify-center items-center">
                        <Link to={"/movie"} onClick={handleClick} className="h-auto">
                            <span className={`h-full ${bubbleColors[data?.key]} cursor-pointer`}>{data.title}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;