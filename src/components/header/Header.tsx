import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.9,
    },
  },
};

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="my-0 md:my-6"
    >
      {children}
    </motion.div>
  );
};

export default Header;
