import { motion } from "framer-motion";

export const Steps = () => {
  return (
    <motion.div className="flex flex-col space-y-10">
      <motion.div
        className="w-full text-left text-2xl"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl">Regalamos</h1>
        <div>- 50 paraguas naranjas</div>
        <div>- 100 remeras custom para el evento</div>
        <div>- 1000 stickers piolas</div>
        <div>- más sorpresas...</div>
      </motion.div>

      <motion.div
        className="w-full text-left text-2xl"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl">Vamos en caravana</h1>
        <div>- 20 minutos de caminata</div>
        <div>- Música al palo</div>
        <div>- Reclutando gente</div>
      </motion.div>

      <motion.div
        className="w-full text-left text-2xl"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl">Llegamos al Campo de Polo</h1>
        <div>- Creamos la B Gigante</div>
        <div>- Recibis Bolsa con merch</div>
        <div>- Formas parte de Record Guinesss</div>
      </motion.div>
    </motion.div>
  );
};

export default Steps;