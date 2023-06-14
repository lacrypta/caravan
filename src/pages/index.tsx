import { type NextPage } from "next";
import Head from "next/head";
import Countdown from "~/components/content/Countdown";
import Footer from "~/components/footer/Footer";
import Title from "~/components/header/Title";
import Date from "~/components/header/Date";
import Map from "~/components/location/Map";
import Steps from "~/components/content/Steps";
import Banner from "~/components/content/Banner";
import Header from "~/components/header/Header";
import Content from "~/components/content/Content";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>La Caravana Bitcoiner - La Crypta</title>
        <meta
          name="description"
          content="La Caravana Bitcoiner desde La Crypta para la #BGigante"
        />

        {/* Verification tags */}
        <meta
          name="facebook-domain-verification"
          content="rqzhaxm4c76o8eja0seova4eqlq9ki"
        />

        {/* Facebook */}
        <meta property="og:title" content="La Caravana Bitcoiner" />
        <meta property="og:type" content="event.lacrypta" />
        <meta property="og:url" content="https://caravana.lacrypta.ar/" />
        <meta
          property="og:image"
          content="https://caravana.lacrypta.ar/images/banner.png"
        />

        {/* Twitter metatags */}
        <meta name="twitter:title" content="La Caravana Bitcoiner" />
        <meta
          name="twitter:description"
          content="La Caravana Bitcoiner desde La Crypta para la #BGigante"
        />
        <meta
          name="twitter:image"
          content="https://caravana.lacrypta.ar/images/banner.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black bg-bitcoin text-center text-white">
        <div className="container flex flex-col items-center justify-center px-4 py-16 ">
          <Header>
            <Title />
            <Date />
          </Header>

          <Content>
            <Map />
            <Steps />
            <Banner />
          </Content>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
