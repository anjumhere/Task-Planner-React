import React, { useEffect, useState } from "react";

const TimeLeft = () => {
  const getSecondsLeft = () => {
    const now = new Date();
    const secondsPassed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    return 86400 - secondsPassed;
  };

  const [timeLeft, setTimeLeft] = useState(getSecondsLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getSecondsLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format to always show two digits (e.g., 09:05:01)
  const format = (num) => String(num).padStart(2, "0");

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex h-40 items-center justify-center rounded-3xl bg-gray-400 px-14 text-6xl font-bold text-white">
      {/* font-mono ensures each digit has the same width to prevent jumping */}
      <span className="font-mono tabular-nums">
        {format(hours)}:{format(minutes)}:{format(seconds)}
      </span>
    </div>
  );
};

export default TimeLeft;
