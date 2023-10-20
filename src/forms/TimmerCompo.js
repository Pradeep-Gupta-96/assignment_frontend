import React, { useState, useEffect } from 'react';

const TimmerCompo = ({ targetTime, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = targetTime - new Date().getTime();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        clearInterval(interval);
        onTimeout();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetTime, onTimeout]);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div className="timmer">
        Time Left: <strong>{minutes} : {seconds}</strong>
      </div>
    </div>
  );
};



export default TimmerCompo