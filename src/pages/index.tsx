import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CaravanAnimation from "~/components/CaravanAnimation";
import textLogoSrc from "../../public/images/logo-text.svg";
import bannerSrc from "../../public/images/banner.jpg";
import Image, { type StaticImageData } from "next/image";
import Countdown from "~/components/Countdown";
import Footer from "~/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caravana Lightning - La Crypta</title>
        <meta name="description" content="Desarrollado por La Crypta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black bg-bitcoin text-center text-white">
        <div className="container flex flex-col items-center justify-center px-4 py-16 ">
          <div className="flex flex-col items-center  font-extrabold tracking-tight">
            <h2 className="text-3xl sm:text-[3rem]">Sumate a</h2>
            <h1 className="text-5xl sm:text-[5rem]">La Caravana de Bitcoin</h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-11">
            <div className="text-4xl">
              Este <b>Sábado 10 de Junio, 14hs</b>
            </div>

            <Countdown />

            <Link href="https://goo.gl/maps/ugNAWT34A7wDimMa7" target="_blank">
              <CaravanAnimation />
            </Link>

            <div className="flex flex-col text-3xl">
              <div>
                <span>salimos desde </span>
                <Link href="https://links.lacrypta.ar" target="_blank">
                  <Image
                    src={textLogoSrc as StaticImageData}
                    className="ml-2 inline-block text-4xl"
                    alt="La Crypta Logo"
                  />
                </Link>
              </div>
              <div className="text-2xl">
                <Link
                  href="https://goo.gl/maps/A3VLNRWWWt7EfKcQ6"
                  target="_blank"
                >
                  (Villanueva 1367, CABA)
                </Link>
              </div>
            </div>

            <div className="w-full text-left text-2xl">
              <div className="text-4xl">Regalamos</div>
              <div>- 50 paraguas naranjas</div>
              <div>- 100 remeras custom para el evento</div>
              <div>- sorpresas</div>
            </div>

            <div className="w-full text-left text-2xl">
              <div className="text-4xl">Vamos caminando en caravana</div>
              <div>- 20 minutos</div>
              <div>- Música al palo</div>
              <div>- Reclutando gente</div>
            </div>

            <div className="w-full text-left text-2xl">
              <div className="text-4xl">Llegamos al Campo de Polo</div>
              <div>- Creamos la B Gigante</div>
              <div>- Recibis Bolsa con merch</div>
              <div>- Formas parte de Record Guinesss</div>
            </div>

            <div className="text-2xl">
              ⬇️⬇️ Registrate GRATIS en EventBrite ⬇️⬇️
            </div>
            <div>
              <Link
                href="https://www.eventbrite.com.ar/e/se-parte-de-la-humana-mas-grande-del-mundo-tickets-617298645867"
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
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
