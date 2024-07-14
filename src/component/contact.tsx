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
    <div className="flex justify-center flex-col w-full xl:w-[400px] h-[500px] xl:h-auto bg-b5 p-6  text-white shadow-md text-center">
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
        <p className="text-md">(063) 152-5854</p>
        <p className="text-md">Email: ttthisiriton29@gmail.com</p>
      </div>
      <div className="flex justify-center space-x-4 xl:mb-12 mb-8">
        <a
          href="https://www.linkedin.com/in/ภูวดล-ศรีธร-a5a1bb316/"
          className="text-3xl hover:text-b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/BHU23"
          className="text-3xl hover:text-b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100010110364450"
          className="text-3xl hover:text-b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/tik_kkbl/"
          className="text-3xl hover:text-b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className={"w-[100%] pd-2"}>
        <div className="w-full p-2 flex items-center justify-center">
          <a
            href="../myProject"
            className="flex items-center justify-center bg-b1 text-black font-medium py-2 px-4 rounded hover:text-white w-[70%] text-center"
          >
            My project
          </a>
        </div>
      </div>
    </div>
  );
}
