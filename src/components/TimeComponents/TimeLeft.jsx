import React, { useEffect, useState } from "react";

const TimeLeft = () => {
  const getSecondsLeft = () => {
    const now = new Date();
    const secondsPassed =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    return 86400 - secondsPassed;
  };

  const [timeLeft, setTimeLeft] = useState(getSecondsLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getSecondsLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-gray-400   px-14 h-40 flex justify-center items-center text-6xl font-bold text-white rounded-3xl">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default TimeLeft;
