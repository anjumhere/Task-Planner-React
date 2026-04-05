import React from "react";
import {
  RiSunFill,
  RiMoonFill,
  RiRunFill,
  RiCupFill,
  RiMailFill,
  RiMusicFill,
  RiBook2Fill,
  RiPhoneFill,
  RiRestaurantFill,
  RiMentalHealthFill,
  RiComputerFill,
} from "@remixicon/react";

// map emoji to icon component
const iconMap = {
  "🏃": RiRunFill,
  "☕": RiCupFill,
  "💻": RiComputerFill,
  "📚": RiBook2Fill,
  "🎵": RiMusicFill,
  "🧘": RiMentalHealthFill,
  "📞": RiPhoneFill,
  "🍽️": RiRestaurantFill,
};

const CARD_HEIGHT = 110; // must match Tasks.jsx height
const GAP = 12; // must match gap in RenderTasks

const TimeLine = ({ newTasks }) => {
  return (
    <div
      className="relative flex flex-col items-center flex-shrink-0"
      style={{ width: "52px" }}
    >
      {/* Sun */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center z-20 mb-3 flex-shrink-0"
        style={{
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
        }}
      >
        <RiSunFill size={18} color="#e8d04f" />
      </div>

      {/* vertical line behind everything */}
      <div
        className="absolute top-0 bottom-0 w-px z-0"
        style={{
          background: "var(--color-line)",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* colored blocks — one per task */}
      <div
        className="relative z-10 flex flex-col w-full items-center"
        style={{ gap: `${GAP}px` }}
      >
        {newTasks.length === 0
          ? // placeholder empty blocks
            [1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="w-11 rounded-2xl flex-shrink-0"
                style={{
                  height: `${CARD_HEIGHT}px`,
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                }}
              />
            ))
          : newTasks.map((task, idx) => {
              const Icon = iconMap[task.icon] || RiRunFill;
              return (
                <div
                  key={idx}
                  className="w-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    height: `${CARD_HEIGHT}px`,
                    background: task.color || "var(--color-card)",
                  }}
                >
                  <Icon size={22} color="white" />
                </div>
              );
            })}
      </div>

      {/* Moon */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center z-20 mt-3 flex-shrink-0"
        style={{
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
        }}
      >
        <RiMoonFill size={16} color="#888" />
      </div>
    </div>
  );
};

export default TimeLine;
