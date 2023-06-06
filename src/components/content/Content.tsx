import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.6,
    },
  },
};

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-11"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default Content;
