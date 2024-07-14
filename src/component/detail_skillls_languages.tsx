import React from "react";

interface DetailSkilllsLanguagesProps {
  title: string;
  value: string;
  barWidth: number;
}

const DetailSkilllsLanguages: React.FC<DetailSkilllsLanguagesProps> = ({
  title,
  value,
  barWidth,
}) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full">
      <div className="h-auto pt-4 lg:p-4 lg:w-1/3 w-full">
        <p className="font-semibold">
          {title}
          <span className="font-normal">
            {value === "" ? "" : ` : ${value}`}
          </span>
        </p>
      </div>
      <div className="h-auto pb-4 lg:p-4 lg:w-2/3 w-full">
        <div className="relative w-full h-2 rounded-lg mt-2 flex items-center justify-start">
          <div className="absolute h-[50%] rounded-lg bg-b1 w-full"></div>
          <div
            className="absolute h-full rounded-lg bg-b5"
            style={{ width: `${barWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkilllsLanguages;
