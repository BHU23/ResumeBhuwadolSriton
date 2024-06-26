import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
      <div className="items-center justify-items-start px-10 py-10 xl:pt-20 xl:pb-6 xl:px-24 bg-b6 text-white">
        <div className="flex flex-wrap xl:flex-nowrap h-auto  xl:gap-10 gap-6 xl:pb-10 pb-6 justify-items-start">
          {/* <div className="h-auto xl:px-24 xl:pt-24 px-10 pt-10 xl:w-[50%] w-full"> */}
          <div className="h-auto xl:w-[50%] w-full">
            <p className="xl:text-4xl py-1 sm:text-3xl text-2xl text-shadow-custom text-b4 font-semibold whitespace-pre-line">
              {`อย่าพูดว่าทำไม่ได้...
              ถ้ายังไม่ได้ทำ...`}
            </p>
          </div>
          <div className="h-auto xl:w-[50%] w-full xl:px-24">
            <div className="xl:mb-12 mb-8">
              <p className="text-md">(098) 152-7190</p>
              <p className="text-md">Email: ttthisiriton29@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-items-start xl:flex-nowrap h-auto xl:gap-10 gap-6">
          <div className="h-auto xl:w-[50%] w-full ">
            <div className="flex space-x-4 xl:mb-12 mb-8 justify-items-start">
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
          </div>
          <div className="h-auto xl:w-[50%] w-full xl:px-24">
            <div className="w-full p-2">
              <a
                href="../myProject"
                className="flex items-center justify-center bg-b1 text-black font-medium py-2 px-4 rounded hover:text-white w-[70%] text-center"
              >
                My project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;
