import { Link } from "react-router-dom";
import { useState } from "react";

// import { fetchMovie } from "../API/api";
export function BrowsePage() {
  const [movieData, setMovieData] = useState([]);

  // useEffect(() => {
  //     const getMovie = async () => {
  //         const data = await fetchMovie();
  //         setMovieData(data);
  //     }
  //     console.log(movieData);
  // }, []);
  return (
    <>
      <div>this is the browse page</div>
      <Link to={"/"}>
        <div>favorite page</div>
      </Link>
    </>
  );
}
