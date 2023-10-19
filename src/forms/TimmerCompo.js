// Timer.js
import React, { useEffect, useState } from 'react';

const TimmerCompo = ({ initialTime, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout(); // Trigger the callback function when the timer reaches 0
    }

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, onTimeout]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        Time Left: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
};


export default TimmerCompo