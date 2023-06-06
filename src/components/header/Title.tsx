import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const Title = () => {
  return (
    <motion.div
      className="flex flex-col items-center space-x-4 font-extrabold tracking-tight"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="text-5xl sm:text-[3rem]"
        variants={{
          hidden: { y: "-100%", opacity: 0 },
          show: { y: "0%", opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
      >
        sumate a
      </motion.h2>
      <motion.h1
        className="flex flex-row items-center justify-center space-x-4 text-7xl sm:text-[5rem]"
        variants={{
          hidden: { scale: 10, opacity: 0 },
          show: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className=" text-gray-100"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.04, 1.07, 1, 1],
            rotate: [0, 1.04, 1, 0, -1.05, 0],
            x: [0, 7, 10, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 7.2 }}
        >
          #
        </motion.div>

        <motion.div
          className=" text-gray-100"
          initial={{ scale: 1 }}
          animate={{
            scale: [1.03, 1.04, 1.07, 1, 1, 1.03],
            rotate: [0, 1.04, 0, 0, -1.1, 0],
            x: [0, 7, 10, 0, 0, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: 9 }}
        >
          La
        </motion.div>
        <motion.div
          className=" text-gray-100"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.04, 1.07, 1, 1, 1],
            rotate: [-1.1, 0, 1.1, 0, 0, 0, -1.1],
            x: [0, 7, 10, 0, 0, 1, 0],
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          Caravana
        </motion.div>
        <motion.div
          className=" text-orange-400"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.04, 1.07, 1, 1],
            rotate: [0, 1.1, 0, -1.1, 0],
            x: [0, 7, 10, 0, 0],
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          BITCOINER
        </motion.div>
      </motion.h1>
    </motion.div>
  );
};

export default Title;
