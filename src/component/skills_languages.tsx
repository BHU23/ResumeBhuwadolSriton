// skills - languages;
import React from "react";
import DetailSkilllsLanguages from "./detail_skillls_languages";

function SkillsLanguages() {
  return (
    <div id="skills-languages">
      <p className="h-auto py-1 pb-5 w-full xl:text-4xl sm:text-3xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Skillls & Languages
      </p>
      <DetailSkilllsLanguages
        title={"HTML & CSS"}
        value={""}
        barWidth={"1/4"}
      />
      <DetailSkilllsLanguages title={"SQL"} value={""} barWidth={"1/3"} />
      <DetailSkilllsLanguages title={"SQiL"} value={""} barWidth={"32"} />
      <div className="h-auto p-4 w-full">
        <h6 className="h-1 rounded-lg bg-gray w-1/12"></h6>
      </div>
      <DetailSkilllsLanguages
        title={"HTML & CSS"}
        value={""}
        barWidth={"3/4"}
      />
      <DetailSkilllsLanguages title={"SQL"} value={""} barWidth={"1/3"} />
    </div>
  );
}

export default SkillsLanguages;
