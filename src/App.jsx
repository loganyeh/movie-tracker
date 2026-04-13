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
  // movieOverviewAPI variables 
  const [movieID, setMovieID] = useState(569094);
  
  return (
    <>
      <MyContext.Provider>
        <Routes>
          <Route path="/" element={<BrowsePage setMovieID={setMovieID} />} />
          <Route path={`/movie`} element={<MovieInfoPage movieID={movieID} />}/>
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
