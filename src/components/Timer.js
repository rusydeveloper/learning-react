import React, { useState, useEffect } from "react";

function Timer(props) {
  const calculateTimeLeft = () => {
    const difference = +new Date(props.deadline) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <td className="timer-col">
        {timeLeft[interval]}
        <br /> {interval}
      </td>
    );
  });

  return (
    <div>{timerComponents.length ? timerComponents : <span>Habis!</span>}</div>
  );
}
export default Timer;
