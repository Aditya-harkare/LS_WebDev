import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setTime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="mb-3 text-muted fs-5 fw-bolder">⏱️ Time Spent: {time} seconds</div>;
}

export default Timer;