import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl text-zinc-400 font-semibold">
          {" "}
          {String(time.getHours()).padStart(2, "0")}:
          {String(time.getMinutes()).padStart(2, "0")}:
          {String(time.getSeconds()).padStart(2, "0")}
        </h1>
      </div>
    </div>
  );
};

export default Timer;
