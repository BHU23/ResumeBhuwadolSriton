
import { DetailEducationExperience } from "./detail_education_experience";

function Experience() {
  return (
    <div id="education-experience">
      <p className="xl:text-3xl py-1 pb-5 sm:text-2xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Experience
      </p>
      <DetailEducationExperience
        company="Prompt Lab"
        location="Nakhon Ratchasima, Thailand "
        dateTime="May 2024- Present"
        detail={` • Adept in Agile development methodologies.
 • Proficient in designing and deploying responsive websites.
 • Successfully integrated LLM models to enhance website functionality and user experience.
 • Experienced in Hexagonal architecture and design patterns for scalable, maintainable backend solutions.`}
      />
    </div>
  );
}

export default Experience;
