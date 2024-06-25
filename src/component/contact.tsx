import React from "react";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <div className="w-full xl:w-[400px] h-[60%] xl:h-auto bg-b5 p-6  text-white shadow-md text-center xl:pt-12">
      <img
        className="w-32 h-32 rounded-full mx-auto mb-4"
        src={profile}
        alt="Bhuwadol Sriton"
      />
      <h2 className="text-2xl font-semibold hidden xl:block xl:mb-12 mb-4">
        Bhuwadol Sriton
      </h2>
      <p className="text-lg mb-1">BS in Computer Engineering</p>
      <p className="text-md xl:mb-32 mb-4">
        Suranaree University of Technology,
        <br />
        Nakhon Ratchasima, Thailand
      </p>
      <div className="xl:mb-12 mb-8">
        <p className="text-md">(098) 152-7190</p>
        <p className="text-md">Email: tttksiriton29@gmail.com</p>
      </div>
      <div className="flex justify-center space-x-4 xl:mb-12 mb-8">
        <a
          href="https://www.linkedin.com/in/%E0%B8%A0%E0%B8%B9%E0%B8%A7%E0%B8%94%E0%B8%A5-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3-a5a1bb316/"
          className="text-3xl hover:text-b1"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/BHU23" className="text-3xl hover:text-b1">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100010110364450"
          className="text-3xl hover:text-b1"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-3xl hover:text-b1">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <a
        href="../myProject"
        className="inline-block bg-b1 text-black font-medium py-2 px-4 rounded hover:text-white"
      >
        My project
      </a>
    </div>
  );
}
