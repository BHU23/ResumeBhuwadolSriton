
type DetailExtracurricularActivitiesInteresProps = {
  title: string;
  detail: string;
};

export function DetailExtracurricularActivitiesInteres({
  title,
  detail,
}: DetailExtracurricularActivitiesInteresProps) {
  return (
    <div className="p-4 rounded-lg ">
      <h1 className="text-xl font-semibold mb-2 ">{title}</h1>
      <p className="whitespace-pre-line text-black-700">{detail}</p>
    </div>
  );
}
