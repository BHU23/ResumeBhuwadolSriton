import React from "react";
import { DetailExtracurricularActivitiesInteres } from "./detail_extracurricularActivities_interes";

function Interests() {
  return (
    <div id="activities-interests">
      <p className="xl:text-4xl py-1 pb-5 sm:text-3xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Interests
      </p>
      <DetailExtracurricularActivitiesInteres
        title=""
        detail={`Playing badminton, volleyball and mobile game`}
      />
      <DetailExtracurricularActivitiesInteres
        title=""
        detail={`Learning foreign languages`}
      />
      <DetailExtracurricularActivitiesInteres title="" detail={`Codding`} />
      <DetailExtracurricularActivitiesInteres
        title=""
        detail={`Listen to music`}
      />
      <DetailExtracurricularActivitiesInteres
        title=""
        detail={`Watch movies and series`}
      />
    </div>
  );
}

export default Interests;
