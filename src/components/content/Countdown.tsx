import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactCountdown from "react-countdown";

export const Countdown = () => {
  const [date, setDate] = useState<number>();
  useEffect(() => {
    setDate(new Date("2023-06-10T17:00:00.000Z").getTime());
  }, []);
  return (
    <motion.div
      variants={{
        hidden: { scale: 10, opacity: 0 },
        show: { scale: 1, opacity: 1 },
      }}
      transition={{ duration: 0.4 }}
    >
      {date ? (
        <>
          <div className="flex flex-row items-center justify-around">
            <div>días</div>
            <div>horas</div>
            <div>min</div>
            <div>seg</div>
          </div>
          <ReactCountdown className="text-6xl" date={date} />
        </>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default Countdown;
