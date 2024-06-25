import React from "react";

type DetailEducationExperienceProps = {
  dateTime: string;
  detail: string;
};

export function DetailEducationExperience({
  dateTime,
  detail,
}: DetailEducationExperienceProps) {
  return (
    <div className="p-4 rounded-lg ">
      <h1 className="text-xl font-semibold mb-2 ">{dateTime}</h1>
      <p className="whitespace-pre-line text-black-700">{detail}</p>
    </div>
  );
}
