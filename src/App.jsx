import BrowsePage from "./Pages/BrowsePage";
import FavoritePage from "./Pages/FavoritePage";
import DashboardPage from "./Pages/DashboardPage";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<DashboardPage />}></Route> */}
        <Route path="/" element={<BrowsePage />} />
        {/* <Route path="/favorite" element={<FavoritePage />} /> */}
      </Routes>
    </>
  );
}

export default App;
