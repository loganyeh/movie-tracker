import BrowsePage from "./Pages/BrowsePage";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BrowsePage />} />
      </Routes>
    </>
  );
}

export default App;
