import React from "react";
import { DetailEducationExperience } from "./detail_education_experience";

function Experience() {
  return (
    <div id="education-experience">
      <p className="xl:text-4xl py-1 pb-5 sm:text-3xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Experience
      </p>
      <DetailEducationExperience
        dateTime="May 2021- June 2025"
        detail={`Suranaree University of Technology, Nakhon Ratchasima, Thailand
Bachelor of Engineering (Computer Engineering), Anticipated February 2025
GPA: 3.98/3.99`}
      />
    </div>
  );
}

export default Experience;
