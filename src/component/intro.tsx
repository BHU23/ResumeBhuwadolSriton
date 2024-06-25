import React from "react";
import bgImage from "../assets/bgmain1.png";

function Intro() {
  return (
    <div
      className="relative xl:flex-1 w-full h-[300px] sd:h-[400px] md:h-[450px] xl:h-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute bottom-0 pb-6 left-0 pl-10 xl:pl-24 xl:py-36">
        {/* <p className="xl:text-5xl py-1 sm:text-3xl text-2xl">HELLO, I’M</p>
        <p className="xl:text-8xl py-2 sm:text-6xl text-5xl">Bhuwadol Sriton</p>
        <p className="xl:text-5xl py-1 sm:text-3xl text-2xl">
          Computer Engineering Student.
        </p> */}
        <p className="xl:text-5xl py-1 sm:text-3xl text-1xl text-stroke text-shadow-custom">
          HELLO, I’M
        </p>
        <p className="xl:text-8xl py-2 sm:text-6xl text-3xl text-stroke text-shadow-custom">
          Bhuwadol Sriton
        </p>
        <p className="xl:text-5xl py-1 sm:text-3xl text-1xl text-stroke text-shadow-custom">
          Computer Engineering Student.
        </p>
      </div>
    </div>
  );
}

export default Intro;
