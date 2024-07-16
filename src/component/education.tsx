
import { DetailEducationExperience } from "./detail_education_experience";

function EducationExperience() {
  return (
    <div id="education-experience">
      <p className="xl:text-3xl py-1 pb-5 sm:text-2xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Education
      </p>
      <DetailEducationExperience
        company=""
        location=""
        dateTime="2021-2025"
        detail={`Suranaree University of Technology, Nakhon Ratchasima, Thailand
Bachelor of Engineering (Computer Engineering), Anticipated February 2025
GPA: 3.98`}
      />
      <DetailEducationExperience
        company=""
        location=""
        dateTime="2018-2021"
        detail={`Dongyaiwitthayakhom Ratchamankhalabhisek 
School, Maha Sarakham, Thailand 
M.6 Certificate, February 2021 GPA: 3.97`}
      />
    </div>
  );
}

export default EducationExperience;
