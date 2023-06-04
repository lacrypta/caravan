import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CaravanAnimation from "~/components/CaravanAnimation";
import Logo from "~/components/Logo";
import textLogoSrc from "../../public/images/logo-text.svg";
import bannerSrc from "../../public/images/banner.jpg";
import Image, { type StaticImageData } from "next/image";
import Countdown from "~/components/Countdown";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Caravana Lightning - La Crypta</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white bg-bitcoin text-center text-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col items-center  font-extrabold tracking-tight">
            <h2 className="text-3xl sm:text-[3rem]">Sumate a</h2>
            <h1 className="text-5xl sm:text-[5rem]">La Caravana de Bitcoin</h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-4xl">
              Este <b>Sábado 10 de Julio, 14hs</b>
            </div>

            <Countdown />

            <Link href="https://goo.gl/maps/ugNAWT34A7wDimMa7" target="_blank">
              <CaravanAnimation />
            </Link>

            <div className="flex flex-col text-3xl">
              <div>
                <span>salimos desde </span>
                <Image
                  src={textLogoSrc as StaticImageData}
                  className="ml-2 inline-block text-4xl"
                  alt="La Crypta Logo"
                />
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
        <div className="flex w-full flex-col items-center justify-center bg-gray-200 p-9">
          <div>Organizado por </div>
          <Logo width={200} height={200} />
        </div>
      </main>
    </>
  );
};

export default Home;
