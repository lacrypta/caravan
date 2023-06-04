import Image from "next/image";
import caravanSrc from "../../public/images/caravan.gif";

export const CaravanAnimation = () => {
  return <Image src={caravanSrc} alt="Mapa Caravana" />;
};

export default CaravanAnimation;
