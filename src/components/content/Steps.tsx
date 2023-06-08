import { motion } from "framer-motion";

export const Steps = () => {
  return (
    <motion.div className="flex flex-col space-y-10">
      <motion.div
        className="w-full text-left text-2xl"
        initial={{ y: "50%", opacity: 0 }}
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
        initial={{ y: "50%", opacity: 0 }}
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
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl">
          Llegamos al Evento de{" "}
          <a href="https://bitcoinargentina.org/" target="_blank">
            ONG Bitcoin Argentina
          </a>
        </h1>
        <div>- Recibis Bolsa con merch</div>
        <div>- Creamos la B Gigante</div>
        <div>- Generar un Record Mundial</div>
      </motion.div>
    </motion.div>
  );
};

export default Steps;
