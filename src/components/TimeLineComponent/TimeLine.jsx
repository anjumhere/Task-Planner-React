import React from "react";
import {
  RiSunFill,
  RiRunFill,
  RiShowersFill,
  RiCupFill,
  RiMailFill,
  RiMoonFill,
} from "@remixicon/react";
const TimeLine = () => {
  return (
    <div className="  relative flex flex-col items-center py-20 justify-center ">
      {/* The Sun (Top) */}
      <RiSunFill
        size={55}
        color="white"
        className="absolute top-0 bg-card rounded-full p-3 shadow-lg z-20"
      />

      {/* The Line - Set to absolute so it sits "under" the icons */}
      <div className="absolute top-0 bottom-0 w-1 bg-line z-0"></div>

      {/* The Icons Column - These naturally sit on top of the absolute line */}
      <div className="flex flex-col gap-10 relative z-10">
        <div className="h-50 w-17 rounded-2xl bg-card flex items-center justify-center shadow-md">
          <RiRunFill size={35} color="#e86c4f" />
        </div>
        <div className="h-50 w-17 rounded-2xl bg-card flex items-center justify-center shadow-md">
          <RiShowersFill size={35} color="#4fa3e8" />
        </div>
        <div className="h-50 w-17 rounded-2xl bg-card flex items-center justify-center shadow-md">
          <RiCupFill size={35} color="#f5a623" />
        </div>
        <div className="h-50 w-17 rounded-2xl bg-card flex items-center justify-center shadow-md">
          <RiMailFill size={35} color="#b06de8" />
        </div>
        <div className="h-40 w-17 rounded-2xl   flex items-center justify-center shadow-md"></div>
      </div>

      {/* The Moon (Bottom) */}
      <RiMoonFill
        size={55}
        color="white"
        className="absolute bottom-0 bg-card rounded-full p-3 shadow-lg z-20"
      />
    </div>
  );
};

export default TimeLine;
