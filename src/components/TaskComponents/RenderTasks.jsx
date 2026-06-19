import React from "react";
import Tasks from "./Tasks";

const RenderTasks = ({ newTasks, formatTime }) => {
  // Handle Empty State
  if (!newTasks?.length) {
    return (
      <div className="flex h-[110px] items-center justify-center rounded-2xl border border-dashed border-border text-text-muted">
        <p className="text-xs uppercase tracking-widest">No events yet</p>
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col gap-3">
      {newTasks.map((task) => (
        // Use a unique ID instead of index for better React performance
        <Tasks 
          key={task.id || task.title} 
          task={task} 
          formatTime={formatTime} 
        />
      ))}
    </div>
  );
};

export default RenderTasks;
