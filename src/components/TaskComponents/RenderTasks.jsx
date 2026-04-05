import React from "react";
import Tasks from "./Tasks";

const RenderTasks = ({ formData }) => {
  const tasks = [
    { id: 1, title: "Morning ", time: "07:00 AM", color: "#e86c4f" },
    { id: 2, title: "Shower", time: "08:00 AM", color: "#4fa3e8" },
    { id: 3, title: "Breakfast", time: "09:00 AM", color: "#f5a623" },
    { id: 4, title: "Check Email", time: "10:00 AM", color: "#e86c4f" },
  ];
  return (
    <div className="h-280 w-1/3  flex flex-col gap-10 rounded-3xl      ">
      {tasks.map((item) => (
        <Tasks key={item.id} task={item} formData={formData} />
      ))}
    </div>
  );
};

export default RenderTasks;
