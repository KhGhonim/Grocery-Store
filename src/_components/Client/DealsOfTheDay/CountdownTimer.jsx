import React, { useState, useEffect } from "react";

export default function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);
  return (
    <div className="flex justify-center items-center gap-3 absolute bottom-1/2 group-hover:bottom-3/4 transition-all duration-700 ease-in-out left-1/2 transform -translate-x-1/2">
      <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-12">
        <div className="text-lg font-bold text-green-600">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-600">Days</div>
      </div>
      <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-12">
        <div className="text-lg font-bold text-green-600">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-600">Hours</div>
      </div>
      <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-12">
        <div className="text-lg font-bold text-green-600">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-600">Mins</div>
      </div>
      <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-2 w-12">
        <div className="text-lg font-bold text-green-600">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-xs text-gray-600">Secs</div>
      </div>
    </div>
  );
}
