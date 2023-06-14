import { motion } from "framer-motion";
import Link from "next/link";
import CaravanAnimation from "~/components/location/CaravanAnimation";
import textLogoSrc from "../../../public/images/logo-text.svg";
import Image, { type StaticImageData } from "next/image";

export const Map = () => {
  return (
    <motion.div
      className="flex flex-col text-3xl"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
    >
      <Link href="https://goo.gl/maps/ugNAWT34A7wDimMa7" target="_blank">
        <CaravanAnimation />
      </Link>

      <div className="mt-4">
        <span>salimos desde </span>
        <Link href="https://links.lacrypta.ar" target="_blank">
          <Image
            src={textLogoSrc as StaticImageData}
            className="ml-2 inline-block text-4xl"
            alt="La Crypta Logo"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Map;
