import React, { useState } from "react";
import Timer from "../TimeComponents/Timer";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

const Tasks = ({ task, formData }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className=" text-white h-50 w-full bg-card justify-center items-center rounded-xl flex gap-10">
      <div className="h-full w-full   flex justify-between items-center   ">
        <div className="h-4/5 w-full flex flex-col  wrap      px-5  ">
          <h1
            className={`tracking-wide text-5xl text-zinc-400 pb-7 font-semibold transition-all ${isDone ? "line-through text-zinc-600 opacity-50" : "text-zinc-400"}`}
          >
            {formData.title}
          </h1>
          <Timer />
        </div>
        <div className="h-4/5 w-2/6">
          <Checkbox
            checked={isDone}
            onChange={(e) => setIsDone(e.target.checked)}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 38 }, // Change 35 to whatever size you want
              color: task.color,
              "&.Mui-checked": {
                color: task.color,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
