import "./index.css";

import { Routes, Route } from "react-router-dom";
import { MyContext } from "./Context/MyContext.js";
import { useState } from "react";

import BrowsePage from "./Pages/BrowsePage";
import MovieInfoPage from "./Pages/MovieInfoPage.jsx";

function App() {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [top10MoviesData, setTop10MoviesData] = useState([]);
  const [searchMovieData, setSearchMovieData] = useState([]);

  // search state variable
  const [isQuery, setIsQuery] = useState();
  const [query, setQuery] = useState("");

  // characters state variable 
  const [actorData, setActorData] = useState();
  const [relationsData, setRelationsData] = useState();

  // movieOverviewAPI variables 
  const [idFromPoster, setIDFromPoster] = useState();
  const [movieID, setMovieID] = useState(569094);
  const [movieData, setMovieData] = useState();
  const [relationData, setRelationData] = useState();
  const [creditsData, setCreditsData]= useState();
  const [videoData, setVideoData] = useState();
  
  return (
    <>
      <MyContext.Provider value={{ nowPlayingData, setNowPlayingData, popularData, setPopularData, topRatedData, setTopRatedData, upcomingData, setUpcomingData, top10MoviesData, setTop10MoviesData, searchMovieData, setSearchMovieData,
          isQuery, setIsQuery, query, setQuery,
          actorData, setActorData, relationsData, setRelationsData,
          movieID, setMovieID, idFromPoster, setIDFromPoster, movieData, setMovieData, relationData, setRelationData, creditsData, setCreditsData, videoData, setVideoData,
       }}>
        <Routes>
          <Route path="/" element={<BrowsePage />} />
          <Route path="/movie" element={<MovieInfoPage />}/>
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
