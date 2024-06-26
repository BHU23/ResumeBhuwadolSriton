// src/component/Home.js
import React, { useEffect } from "react";
import { useScrollOnLoad } from "../function";
import Tool from "../component/tool";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Carousel from "../component/carousel";
function MyProject() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  useScrollOnLoad();
  useEffect(() => {
    sessionStorage.setItem("scrollTo", "#project");
    sessionStorage.setItem("scrollOffset", "50");
  });
  return (
    <div id="project" className="h-auto xl:p-24 p-10 text-black ">
      <p className="xl:text-3xl py-1 pb-12 sm:text-3xl text-b5 text-2xl font-bold  text-shadow-custom">
        MyProject
      </p>
      <div className="bg-gray h-auto rounded-xl ">
        <Carousel slides={slides} />
      </div>
      <p className="font-semibold pt-12 text-2xl">Name</p>
      <p className="font-normal pt-4 text-1xl">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; detail
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis qui
        quas quis atque. Accusantium adipisci sint voluptates nulla earum
        veritatis dolor dolore aliquam possimus ullam ex animi modi aperiam
        provident quia deleniti, necessitatibus, error quisquam maiores vel
        ratione ipsa distinctio. Porro vel deserunt quibusdam ab hic accusantium
        asperiores repellat atque!
      </p>
      <div className="flex flex-wrap pt-6 xl:gap-6 gap-4 text-center  justify-items-start items-center">
        <p className="font-semibold text-1xl w-auto h-auto">Tools </p>
        <div className="font-semibold text-1xl flex flex-wrap gap-4 ">
          <Tool name={"css"} />
          <Tool name={"html"} />
          <Tool name={"re"} />
        </div>
      </div>
      <div className={"w-[100%] pt-10"}>
        <a
          href="../myProject"
          className="bg-b1 text-black font-medium py-4 px-4 rounded hover:bg-b3 hover:text-white w-[50%]"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span className="pl-2">Repository project</span>
        </a>
      </div>
    </div>
  );
}

export default MyProject;
