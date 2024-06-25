import React from "react";
import About from "../component/about";
import EducationExperience from "../component/education";
import Experience from "../component/experience";
import ExtracurricularActivities from "../component/extracurricularActivities";
import Interests from "../component/interests";
import SkillsLanguages from "../component/skills_languages";
function Home() {
  return (
    <div>
      <div className="h-auto xl:p-24 p-10 bg-b6">
        <About />
      </div>
      <div className="flex flex-wrap xl:flex-nowrap">
        <div className="h-auto xl:px-24 xl:pt-24 px-10 pt-10 xl:w-[50%] w-full">
          <EducationExperience />
        </div>
        <div className="h-auto xl:px-24 xl:pt-24 px-10 pt-10 xl:w-[50%] w-full">
          <Experience />
        </div>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap">
        <SkillsLanguages />
      </div>
      <div className="flex flex-wrap xl:flex-nowrap">
        <div className="h-auto xl:px-24 xl:pt-24 px-10 pt-10 xl:w-[50%] w-full">
          <ExtracurricularActivities />
        </div>
        <div className="h-auto xl:px-24 xl:pt-24 px-10 pt-10 pb-20 xl:w-[50%] w-full">
          <Interests />
        </div>
      </div>
    </div>
  );
}

export default Home;
