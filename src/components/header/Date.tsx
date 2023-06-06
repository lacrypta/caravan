import { motion } from "framer-motion";

export const Date = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="my-5 text-4xl"
    >
      Este <b>Sabado 10 de Junio, 14hs</b>
    </motion.div>
  );
};

export default Date;
