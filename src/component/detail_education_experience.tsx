
type DetailEducationExperienceProps = {
  dateTime: string;
  detail: string;
  location: string | null;
  company: string | null;
};

export function DetailEducationExperience({
  dateTime,
  detail,
  company,
  location,
}: DetailEducationExperienceProps) {
  return (
    <div className="p-4 rounded-lg ">
      <h1 className="font-medium mb-2 text-xl">
        {company != "" ? dateTime : company}{" "}
      </h1>
      <h1 className="text-xl font-semibold mb-2 ">
        {company == "" ? dateTime : company}{" "}
        <span className="whitespace-pre-line text-black-700 font-normal text-base">
          {company == "" ? "" : location}
        </span>
      </h1>
      <p className="whitespace-pre-line text-black-700">{detail}</p>
    </div>
  );
}
