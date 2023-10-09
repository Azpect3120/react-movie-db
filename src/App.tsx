import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./assets/main.css"
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import NowPlaying from "./pages/NowPlaying";

function App (): JSX.Element {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/popular" />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/now-playing" element={<NowPlaying />} />
        </Routes>
      </Router>
    );
}

export default App;
