import Image from "next/image";
import Link from "next/link";
import bannerSrc from "../../../public/images/banner.png";

export const Banner = () => {
  return (
    <>
      <div className="text-2xl">
        <h1>⬇️ Reservá GRATIS en EventBrite ⬇️</h1>
      </div>
      <div>
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
      </div>
      <div className="text-2xl">
        <h1>⬆️ Hacé click el banner ⬆️</h1>
      </div>
    </>
  );
};

export default Banner;
