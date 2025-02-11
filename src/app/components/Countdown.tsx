"use client"; // untuk mendukung penggunaan useEffect

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // Format tanggal dalam string, misalnya: "2024-12-31T00:00:00"
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    let timeLeft = {
      Hari: "00",
      Jam: "00",
      Menit: "00",
      Detik: "00",
    };

    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        Menit: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        Detik: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer flex justify-center text-center mx-auto  font-sans gap-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-[#d6b064] flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-[#fff] min-w-16">
          <span className="text-xl font-semibold">{value}</span>
          <span className="text-xs capitalize">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
