import { useEffect, useState } from "react";
import ReactCountdown from "react-countdown";

export const Countdown = () => {
  const [date, setDate] = useState<number>();
  useEffect(() => {
    setDate(new Date("2023-06-10T17:00:00.000Z").getTime());
  }, []);
  return date ? (
    <div>
      <div className="flex flex-row items-center justify-around">
        <div>días</div>
        <div>horas</div>
        <div>min</div>
        <div>seg</div>
      </div>
      <ReactCountdown className="text-6xl" date={date} />
    </div>
  ) : (
    <></>
  );
};

export default Countdown;
