// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import MyProject from "./pages/myProject";
import { ButtonToUp } from "./component/buttun_to_up";
import Intro from "./component/intro";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-wrap xl:flex-nowrap text-white xl:h-[800px] h-auto">
        <Intro />
        <Contact/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myProject" element={<MyProject />} />
      </Routes>
      <ButtonToUp />
      <Footer/>
    </Router>
  );
}

export default App;
