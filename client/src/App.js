import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import Playlists from "./pages/Playlists";
import Resources from "./pages/Resources";
import Sheets from "./pages/Sheets";
import Playlist from "./pages/Playlist";
import Resource from "./pages/Resource";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <section className="h-[1000px]">
      {/* <Navbar /> */}
      {/* <div className="h-screen border border-blue-500 pt-[81px]">
        <div className="h-20 font-poppins text-[3.3rem] font-black uppercase">
          Sample Text
        </div>
      </div> */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/playlists" element={<Playlists />} /> */}
          {/* <Route path="/playlist/:id" element={<Playlist />} /> */}
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/resource/:id" element={<Resource />} />
          <Route exact path="/podcasts" element={<Podcasts />} />
          {/* <Route exact path="/sheets" element={<Sheets />} /> */}
        </Routes>
      </Router>
    </section>
  );
};

export default App;
