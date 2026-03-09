import "./index.css";

import { Routes, Route } from "react-router-dom";
import { MyContext } from "./Context/MyContext.js";
import { useState } from "react";

import BrowsePage from "./Pages/BrowsePage";

function App() {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [top10MoviesData, setTop10MoviesData] = useState([]);
  
  return (
    <>
      <MyContext.Provider value={{ nowPlayingData, setNowPlayingData, popularData, setPopularData, topRatedData, setTopRatedData, upcomingData, setUpcomingData, top10MoviesData, setTop10MoviesData }}>
        <Routes>
          <Route path="/" element={<BrowsePage />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
