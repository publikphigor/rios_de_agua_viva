import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Declaration from "./Pages/Declaration";

function App() {
  return (
    <Router>
      <div className="p-0 m-0 text-base md:text-xl">
        <Header />
        <div className="mt-[100px]"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/declaration" element={<Declaration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
