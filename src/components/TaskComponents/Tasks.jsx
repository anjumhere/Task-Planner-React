import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

// Helper remains outside to prevent recreation
const getDuration = (start, end) => {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const diff = (eh * 60 + em) - (sh * 60 + sm);
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  return h > 0 ? `${h}h ${m > 0 ? `${m}m` : ""}` : `${m}m`;
};

const Tasks = ({ task, formatTime }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      className={`w-full flex items-center px-4 gap-4 flex-shrink-0 transition-all duration-500 ease-in-out border-2 rounded-2xl ${
        isDone ? "opacity-50 bg-card/50" : "opacity-100 bg-card hover:scale-105"
      }`}
      style={{
        height: "110px",
        borderColor: isDone ? "transparent" : "var(--color-border)",
      }}
    >
      {/* Icon */}
      <div className="text-2xl">{task.icon}</div>

      {/* Content */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <h1
          className={`text-base font-semibold transition-all duration-300 ${
            isDone ? "line-through text-text-muted" : "text-text-primary"
          }`}
        >
          {task.title}
        </h1>

        <p className="text-xs text-text-secondary tracking-wide">
          {formatTime(task.startTime)} – {formatTime(task.endTime)}
        </p>

        <span
          className="text-xs px-2 py-0.5 rounded-full w-fit mt-1"
          style={{
            backgroundColor: isDone ? "var(--color-border)" : `${task.color}25`,
            color: isDone ? "var(--color-text-muted)" : task.color,
          }}
        >
          {getDuration(task.startTime, task.endTime)}
        </span>
      </div>

      {/* Checkbox */}
      <Checkbox
        checked={isDone}
        onChange={(e) => setIsDone(e.target.checked)}
        sx={{
          color: "var(--color-border)",
          "&.Mui-checked": { color: task.color },
          "& .MuiSvgIcon-root": { fontSize: 24 },
        }}
      />
    </div>
  );
};

export default Tasks;
