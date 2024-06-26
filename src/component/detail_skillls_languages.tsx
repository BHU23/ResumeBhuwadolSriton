import React from "react";

interface DetailSkilllsLanguagesProps {
  title: string;
  value: string;
  barWidth: string;
}

const DetailSkilllsLanguages: React.FC<DetailSkilllsLanguagesProps> = ({
  title,
  value,
  barWidth,
}) => {
  //   const barWidth = `${value}%`; // Calculate bar width based on x value

  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full">
      <div className="h-auto p-4 lg:w-1/3 w-full">
        <p className=" font-semibold">
          {title}
          <span className="font-normal">
            {value == "" ? "" : ` : ${value}`}
          </span>
        </p>
      </div>
      <div className="h-auto p-4 lg:w-2/3 w-full">
        <div className="relative w-full h-2 rounded-lg mt-2 flex items-center justify-start">
          <div className="absolute h-[50%] rounded-lg bg-b1 w-full"></div>
          <div
            className={`absolute h-full rounded-lg bg-b5 w-${barWidth?? 0}`}
          ></div>
        </div>
      </div>
    </div>
  );
};
{/* <div className="h-auto p-4 lg:w-2/3 w-full">
        <div className="relative w-full h-2 bg-gray-200 rounded-lg overflow-hidden items-center justify-items-center"> อยากให้ 2 อันนี้ 
          <div className={h-[50%] bg-b1 w-full}></div> 
          <div className={h-full bg-b5 w-[${barWidth}%]}></div> อยู่กลาง componet และอยู่ทับกัน div  <div className={h-[50%] bg-b1 w-full}></div>  อยู่ล่าง <div className={h-full bg-b5 w-[${barWidth}%]}></div> อยู่ บน
        </div> */}

export default DetailSkilllsLanguages;
