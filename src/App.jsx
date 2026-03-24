import "./index.css";

import { Routes, Route } from "react-router-dom";
import { MyContext } from "./Context/MyContext.js";
import { useState } from "react";

import BrowsePage from "./Pages/BrowsePage";
import MovieInfoPage from "./Pages/MovieInfoPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import WIP from "./Pages/WIP.jsx";
import MovieListPage from "./Pages/MovieListPage.jsx";
import FavoritesPage from "./Pages/FavoritesPage.jsx";
import ForumPage from "./Pages/ForumPage.jsx";

// middle nav pages
import StatsPage from "./Pages/StatsPage.jsx";
import SocialPage from "./Pages/SocialPage.jsx";
import ReviewsPage from "./Pages/ReviewsPage.jsx";
import SubmissionsPage from "./Pages/SubmissionsPage.jsx";

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
  const [movieID, setMovieID] = useState(569094);
  const [movieTitleURL, setMovieTitleURL] = useState("");
  const [movieData, setMovieData] = useState();
  const [relationData, setRelationData] = useState();
  const [creditsData, setCreditsData]= useState();
  const [videoData, setVideoData] = useState();
  
  return (
    <>
      <MyContext.Provider value={{ nowPlayingData, setNowPlayingData, popularData, setPopularData, topRatedData, setTopRatedData, upcomingData, setUpcomingData, top10MoviesData, setTop10MoviesData, searchMovieData, setSearchMovieData,
          isQuery, setIsQuery, query, setQuery,
          actorData, setActorData, relationsData, setRelationsData,
          movieID, setMovieID, movieTitleURL, setMovieTitleURL, movieData, setMovieData, relationData, setRelationData, creditsData, setCreditsData, videoData, setVideoData,
       }}>
        <Routes>
          <Route path="/" element={<BrowsePage />} />
          <Route path={`/movie`} element={<MovieInfoPage />}/>
          <Route path={`/profile`} element={<ProfilePage />}/>
          <Route path={`/wip`} element={<WIP />}/>
          <Route path={`/movielist`} element={<MovieListPage />}/>
          <Route path={`/favorites`} element={<FavoritesPage />}/>
          <Route path="/forum" element={<ForumPage />} />

          {/* MIDDLE NAV PAGES */}
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />

        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
