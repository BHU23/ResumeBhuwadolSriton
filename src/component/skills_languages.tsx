// skills - languages;

import DetailSkilllsLanguages from "./detail_skillls_languages";
import skills from "../data/skills.json";
import languages from "../data/languages.json";
function SkillsLanguages() {
  return (
    <div id="skills-languages">
      <p className="h-auto py-1 pb-5 w-full xl:text-3xl sm:text-2xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Skillls & Languages
      </p>
      {Object.values(skills).map((skill) => (
        <DetailSkilllsLanguages
          key={skill.name}
          title={skill.name}
          value={""}
          barWidth={skill.value}
        />
      ))}
      <div className="h-auto p-4 w-full">
        <h6 className="h-1 rounded-lg bg-gray w-1/12"></h6>
      </div>
      {Object.values(languages).map((language) => (
        <DetailSkilllsLanguages
          key={language.name}
          title={language.name}
          value={""}
          barWidth={language.value}
        />
      ))}
    </div>
  );
}

export default SkillsLanguages;
