// api 
import { Link } from "react-router-dom";

type PosterProp = {
    id: number;
    poster: string;
    title: string;
    setMovieID: React.Dispatch<React.SetStateAction<number>>;
}

function Poster({ id, poster, title, setMovieID }: PosterProp ){
    // const bubbleColors = ["hover:text-green-400", "hover:text-red-400", "hover:text-pink-400", "hover:text-red-500", "hover:text-red-400", "hover:text-blue-500"];

    async function handleClick(){
        setMovieID(id);
        // setMovieID(data?.id);
    }

    return(
        <>
            <div className="flex flex-col gap-2">
                {/* Poster Image */}
                <Link to={`/movie`} onClick={handleClick} className="aspect-[11/16] lg:aspect-[4/5] xl:aspect-[5/6] bg-center bg-cover rounded-lg cursor-pointer"
                style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${poster}`})`}}></Link>
                {/* Title Name */}
                <Link to={"/movie"} onClick={handleClick} className={`w-fit text-xs md:text-sm font-semibold text-gray-500 tracking-tight line-clamp-2 cursor-pointer`}>{title}</Link>
                {/* <Link to={"/movie"} onClick={handleClick} className={`${bubbleColors[data?.key]} w-fit text-xs md:text-sm font-semibold text-gray-500 tracking-tight line-clamp-2 cursor-pointer`}>{data?.title}</Link> */}
            </div>
        </>
    )
}

export default Poster;