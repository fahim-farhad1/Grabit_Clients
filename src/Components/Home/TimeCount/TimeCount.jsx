import React, { useState, useEffect } from "react";

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    console.log(now);
    const timeLeft = endTime - now;

    if (timeLeft <= 0) return null;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  if (!timeLeft) {
    return (
      <div className="border text-primary rounded-lg px-10 py-2">
        <h2 className="text-xl font-semibold">Offer Expired!</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F8FB] text-secondary rounded w-fit px-5 py-2">
      <div className="flex justify-center items-center space-x-4 text-lg">
        <p className="text-sm font-semibold">Ends in</p>
        <div className="flex flex-col items-center">
          <span className=" font-bold text-lg text-primary">
            {timeLeft.days}
          </span>
          <span className="text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" font-bold text-lg text-primary">
            {timeLeft.hours}
          </span>
          <span className="text-sm">Hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" font-bold text-lg text-primary">
            {timeLeft.minutes}
          </span>
          <span className="text-sm">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" font-bold text-lg text-primary">
            {timeLeft.seconds}
          </span>
          <span className="text-sm">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
