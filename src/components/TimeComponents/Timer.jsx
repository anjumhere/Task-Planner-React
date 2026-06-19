import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center justify-center">
      {/* Adding tabular-nums and font-mono prevents digit jumping */}
      <h1 className="font-mono text-3xl font-semibold tabular-nums text-zinc-400">
        {format(time.getHours())}:{format(time.getMinutes())}:{format(time.getSeconds())}
      </h1>
    </div>
  );
};

export default Timer;
