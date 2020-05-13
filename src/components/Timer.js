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

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <td className="timer-col" key={i}>
        {timeLeft[interval]}
        <br /> {interval}
      </td>
    );
  });

  return (
    <tbody>
      <tr>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <td>
            <span>{props.deadline}</span>
          </td>
        )}
      </tr>
    </tbody>
  );
}
export default Timer;
