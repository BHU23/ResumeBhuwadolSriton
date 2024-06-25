import React from "react";
import Intro from "../component/intro";
import Contact from "../component/contact";
import About from "../component/about";

function Home() {
  return (
    <div>
      <div className="flex flex-wrap xl:flex-nowrap h-screen text-white">
        <Intro />
        <Contact />
      </div>
      <div className="h-auto xl:p-24 p-10 bg-b6">
        <About />
      </div>
    </div>
  );
}

export default Home;
