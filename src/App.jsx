import "./index.css";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import BrowsePage from "./Pages/BrowsePage.tsx";
import MovieInfoPage from "./Pages/MovieInfoPage.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";
import WIP from "./Pages/WIP.tsx";
import MovieListPage from "./Pages/MovieListPage.tsx";
import FavoritesPage from "./Pages/FavoritesPage.tsx";
import ForumPage from "./Pages/ForumPage.tsx";

// middle nav pages
import StatsPage from "./Pages/StatsPage.tsx";
import SocialPage from "./Pages/SocialPage.tsx";
import ReviewsPage from "./Pages/ReviewsPage.tsx";
import SubmissionsPage from "./Pages/SubmissionsPage.tsx";

import CreateNewThread from "./Components/MovieInfoPageComps/InfoCards/CreateNewThread.tsx";

function App() {
  // movieOverviewAPI variables 
  const [movieID, setMovieID] = useState(569094);
  
  return (
    <>
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

        <Route path="/createnewthread" element={<CreateNewThread />} />

      </Routes>
    </>
  );
}

export default App;
