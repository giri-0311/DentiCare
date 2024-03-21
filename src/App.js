import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import About from "./components/About.jsx";
import Schedule from "./components/Schedule.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
