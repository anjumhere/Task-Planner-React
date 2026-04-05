import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const CARD_HEIGHT = 110; // must match TimeLine.jsx CARD_HEIGHT

const getDuration = (startTime, endTime) => {
  const [startHours, startMinutes] = startTime.split(":");
  const [endHours, endMinutes] = endTime.split(":");
  const startTotal = parseInt(startHours) * 60 + parseInt(startMinutes);
  const endTotal = parseInt(endHours) * 60 + parseInt(endMinutes);
  const diff = endTotal - startTotal;
  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;
  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
};

const Tasks = ({ task, formatTime }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      className="w-full flex items-center px-4 gap-3  flex-shrink-0 hover:scale-105  "
      style={{
        height: `${CARD_HEIGHT}px`,
        background: isDone ? "var(--color-card)" : "var(--color-card)",
        borderRadius: "16px",
        border: "2px solid var(--color-border)",
        opacity: isDone ? 0.5 : 1,
        transition: "all 0.5s ease-in-out",
      }}
    >
      {/* content */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        {/* title */}
        <h1
          className="text-base font-semibold tracking-wide"
          style={{
            color: isDone
              ? "var(--color-text-muted)"
              : "var(--color-text-primary)",
            textDecoration: isDone ? "line-through" : "none",
            transition: "all 0.3s ease",
          }}
        >
          {task.title}
        </h1>

        {/* time range */}
        <p
          className="text-xs tracking-wide"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {formatTime(task.startTime)} – {formatTime(task.endTime)}
        </p>

        {/* duration pill */}
        <div className="flex items-center gap-1 mt-1">
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: isDone ? "var(--color-border)" : `${task.color}25`,
              color: isDone ? "var(--color-text-muted)" : task.color,
            }}
          >
            {getDuration(task.startTime, task.endTime)}
          </span>
        </div>
      </div>

      {/* checkbox */}
      <Checkbox
        checked={isDone}
        onChange={(e) => setIsDone(e.target.checked)}
        sx={{
          padding: "4px",
          "& .MuiSvgIcon-root": { fontSize: 22 },
          color: "var(--color-border)",
          "&.Mui-checked": {
            color: task.color,
          },
        }}
      />
    </div>
  );
};

export default Tasks;
