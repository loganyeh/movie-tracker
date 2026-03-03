import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovie } from "../API/api";

function BrowsePage(){
    const [movieData, setMovieData] = useState([]);

    async function getMovie(){
        const poster = await searchMovie("Avengers");
        setMovieData(poster);
    }

    getMovie();
    console.log(movieData);

    return(
        <>
            <div className="border-2 border-red-600 h-screen w-screen">
                <div>this is the browse page</div>
                <Link to={"/favorite"}><div>favorite page</div></Link>
                <div className="border-2 border-black h-100 w-100">
                    <img src={`https://image.tmdb.org/t/p/w500${movieData}`} alt="movie poster" />
                </div>
            </div>

        </>
    )
}

export default BrowsePage;