import React from "react";
import Timer from "../TimeComponents/Timer";

const Tasks = () => {
  return (
    <div className="h-280 w-1/3  flex flex-col gap-10 rounded-3xl      ">
      <div className=" text-white h-50 w-full bg-card justify-center items-center rounded-xl flex gap-10">
        <div className="h-full w-full   flex justify-between items-center   ">
          <div className="h-4/5 w-full flex flex-col  wrap      px-5 ">
            <h1 className=" tracking-wide text-5xl text-zinc-400 font-semibold">
              Morning
            </h1>
            <h1 className=" tracking-wide text-5xl text-zinc-400 font-semibold pb-5">
              Workout
            </h1>
            <Timer />
          </div>
          <div className="h-4/5 w-2/6    "></div>
        </div>
      </div>
      <div className=" text-white h-50 tracking-wide  w-full bg-card justify-center items-center rounded-xl flex gap-10">
        <div className="h-full w-full   flex justify-between items-center   ">
          <div className="h-4/5 w-full flex flex-col gap-5 wrap    px-5 ">
            <h1 className=" tracking-wide text-5xl text-zinc-400 font-semibold">
              Shower
            </h1>

            <Timer />
          </div>
          <div className="h-4/5 w-2/6    "></div>
        </div>
      </div>
      <div className=" text-white h-50 w-full bg-card justify-center items-center rounded-xl flex gap-10">
        <div className="h-full w-full   flex justify-between items-center   ">
          <div className="h-4/5 w-full flex flex-col gap-5  wrap    px-5 ">
            <h1 className=" tracking-wide text-5xl text-zinc-400 font-semibold">
              BreakFast
            </h1>

            <Timer />
          </div>
          <div className="h-4/5 w-2/6    "></div>
        </div>
      </div>
      <div className=" text-white h-50 w-full bg-card justify-center items-center rounded-xl flex gap-10">
        <div className="h-full w-full   flex justify-between items-center   ">
          <div className="h-4/5 w-full flex flex-col gap-5 wrap     px-5 ">
            <h1 className=" tracking-wide text-5xl text-zinc-400 font-semibold">
              Check Email
            </h1>

            <Timer />
          </div>
          <div className="h-4/5 w-2/6    "></div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
