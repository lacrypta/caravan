import { motion } from "framer-motion";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div className="flex flex-col items-center justify-center space-y-11">
      {children}
    </motion.div>
  );
};

export default Content;
