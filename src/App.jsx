import BrowsePage from "./Pages/BrowsePage";
import FavoritePage from "./Pages/FavoritePage";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        {/* <Route path="/favorite" element={<FavoritePage />} /> */}
        {/* figure out whats wrong on line 11 */}
      </Routes>
    </>
  )
}

export default App
