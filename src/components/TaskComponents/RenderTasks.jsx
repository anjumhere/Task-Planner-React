import React from "react";
import Tasks from "./Tasks";

const RenderTasks = ({ newTasks, formatTime }) => {
  if (newTasks.length === 0) {
    return (
      <div
        className="flex items-center justify-center rounded-2xl"
        style={{
          height: "110px",
          border: "1px dashed var(--color-border)",
          color: "var(--color-text-muted)",
        }}
      >
        <p className="tracking-widest text-xs uppercase">No events yet</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-12" style={{ gap: "12px" }}>
      {newTasks.map((task, idx) => (
        <Tasks key={idx} task={task} formatTime={formatTime} />
      ))}
    </div>
  );
};

export default RenderTasks;
