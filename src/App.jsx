import "./index.css";

import { Routes, Route } from "react-router-dom";
import { MyContext } from "./Context/MyContext.js";
import { useState } from "react";

import BrowsePage from "./Pages/BrowsePage";

function App() {
  const [ nowPlayingData, setNowPlayingData ] = useState([]);
  
  return (
    <>
      <MyContext.Provider value={{ nowPlayingData, setNowPlayingData }}>
        <Routes>
          <Route path="/" element={<BrowsePage />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
