import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Declaration from "./Pages/Declaration";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="grid w-full h-screen place-items-center bg-secondary">
          <PuffLoader color="#4472C4" />
        </div>
      ) : (
        <Router>
          <div className="p-0 m-0 text-base md:text-xl">
            <Header />
            <div className="mt-[150px]"></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/declaration" element={<Declaration />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
