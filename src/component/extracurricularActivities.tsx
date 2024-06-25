import React from 'react'
import { DetailExtracurricularActivitiesInteres } from './detail_extracurricularActivities_interes';

function ExtracurricularActivities() {
  return (
    <div id="activities-interests">
      <p className="xl:text-4xl py-1 pb-5 sm:text-3xl text-b5 text-2xl font-bold text-stroke2 text-shadow-custom">
        Extracurricular Activities
      </p>
      <DetailExtracurricularActivitiesInteres
        title="President, Students Dormitory 10"
        detail={`President, Students Dormitory 10, Suranaree University of Technology, June 2022 - June 2023`}
      />
    </div>
  );
}

export default ExtracurricularActivities
