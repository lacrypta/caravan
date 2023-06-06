import { motion } from "framer-motion";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return <motion.div>{children}</motion.div>;
};

export default Header;
