import ReactCountdown from "react-countdown";

const date = new Date("2023-06-10T17:00:00.000Z").getTime();

export const Countdown = () => {
  return <ReactCountdown className="text-6xl" date={date} />;
};

export default Countdown;
