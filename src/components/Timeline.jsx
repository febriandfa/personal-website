import React from "react";

const Timeline = ({ date, position, organization }) => {
  return (
    <div className="w-fit">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-black"></div>
        <p className="text-sm pl-3 text-gray-500">{date}</p>
      </div>
      <div className="border-l-2 border-black ml-[4.5px] pt-2 pb-7 lg:px-0 px-7">
        <h3 className="font-semibold text-xl lg:ml-4 -ml-2 w-fit">{position}</h3>
        <h4 className="font-light lg:ml-4 -ml-2 lg:w-[85%] w-full">{organization}</h4>
      </div>
    </div>
  );
};

export default Timeline;
