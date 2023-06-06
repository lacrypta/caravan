import { motion } from "framer-motion";

export const Title = () => {
  return (
    <div className="flex flex-col items-center  font-extrabold tracking-tight">
      <h2 className="text-3xl sm:text-[3rem]">Sumate a</h2>
      <motion.h1 className="text-5xl sm:text-[5rem]">
        La Caravana de <span className="text-orange-400">BITCOIN</span>
      </motion.h1>
    </div>
  );
};

export default Title;
