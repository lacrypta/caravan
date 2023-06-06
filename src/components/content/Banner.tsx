import Image from "next/image";
import Link from "next/link";
import bannerSrc from "../../../public/images/banner.png";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <>
      <motion.div
        className="text-2xl"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1>⬇️ Reservá GRATIS en EventBrite ⬇️</h1>
      </motion.div>
      <motion.div
        initial={{ y: "20%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link
          href="https://www.eventbrite.com.ar/e/caravana-bitcoiner-hacia-la-b-gigante-la-crypta-tickets-651072845407"
          target="_blank"
        >
          <Image
            src={bannerSrc}
            alt="La Crypta Logo"
            width={400}
            height={400}
          />
        </Link>
      </motion.div>
      <motion.div
        className="text-2xl"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1>⬆️ Hacé click el banner ⬆️</h1>
      </motion.div>
    </>
  );
};

export default Banner;
