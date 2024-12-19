import { useEffect, useState } from "react";

function getFullDate(): string {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const weekday = date.toLocaleString("default", { weekday: "long" });
  return `${weekday}, ${month} ${day}, ${year}`;
}

function DisplayDateTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    function getCurrentTime() {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const hour = now.getHours();
      const ampm = hour > 12 ? "PM" : "AM";
      setTime(`${time} ${ampm}`);
    }
    getCurrentTime();
    const interval = setInterval(getCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-[1fr_8rem] space-x-6 font-semibold text-gray-600">
      <span>{getFullDate()}</span>
      <span>{time}</span>
    </div>
  );
}

export default DisplayDateTime;
