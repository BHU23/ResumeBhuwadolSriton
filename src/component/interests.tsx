import React from "react";
import { DetailExtracurricularActivitiesInteres } from "./detail_extracurricularActivities_interes";
import interests from "../data/interests.json";
function Interests() {
  return (
    <div id="activities-interests">
      <p className="xl:text-3xl py-1 pb-5 sm:text-2xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Interests
      </p>
      {Object.values(interests).map((interest) => (
        <DetailExtracurricularActivitiesInteres
          title=""
          detail={interest.detail}
        />
      ))}
    </div>
  );
}

export default Interests;
