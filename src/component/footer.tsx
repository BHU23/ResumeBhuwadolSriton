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
      <div className="items-center justify-items-center text-center px-10 py-10 xl:pt-20 xl:pb-6 bg-b6 text-white">
        <div className="flex flex-wrap xl:flex-nowrap h-auto  xl:gap-10 gap-6 xl:pb-10 pb-6">
          {/* <div className="h-auto xl:px-24 xl:pt-24 px-10 pt-10 xl:w-[50%] w-full"> */}
          <div className="h-auto xl:w-[50%] w-full">
            <p className="xl:text-4xl py-1 sm:text-3xl text-2xl text-stroke2 text-shadow-custom text-white font-semibold whitespace-pre-line">
              {`อย่าพูดว่าทำไม่ได้...
              ถ้ายังไม่ได้ทำ...`}
            </p>
          </div>
          <div className="h-auto xl:w-[50%] w-full">
            <div className="flex justify-center space-x-4 xl:mb-12 mb-8">
              <a
                href="https://www.linkedin.com/in/%E0%B8%A0%E0%B8%B9%E0%B8%A7%E0%B8%94%E0%B8%A5-%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3-a5a1bb316/"
                className="text-3xl hover:text-b1"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/BHU23"
                className="text-3xl hover:text-b1"
              >
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
          </div>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap h-auto xl:gap-10 gap-6">
          <div className="h-auto xl:w-[50%] w-full">
            <div className="xl:mb-12 mb-8">
              <p className="text-md">(098) 152-7190</p>
              <p className="text-md">Email: ttthisiriton29@gmail.com</p>
            </div>
          </div>
          <div className="h-auto xl:w-[50%] w-full">
            <div className={"w-[100%] pd-2"}>
              <a
                href="../myProject"
                className="bg-b1 text-black font-medium py-2 px-4 rounded hover:text-white w-[70%] "
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
