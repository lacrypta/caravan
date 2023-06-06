import Image from "next/image";
import caravanSrc from "../../public/images/caravan.gif";
import { useEffect, useState } from "react";

export const CaravanAnimation = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <Image
        src={caravanSrc}
        loading="eager"
        alt="Mapa Caravana"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <div>Generando mapa...</div>}
    </div>
  );
};

export default CaravanAnimation;
