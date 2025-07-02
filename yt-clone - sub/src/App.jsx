import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch-later" element={<WatchLater />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
