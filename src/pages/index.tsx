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
        <title>Caravana Lightning - La Crypta</title>
        <meta name="description" content="Desarrollado por La Crypta" />
        <meta
          name="facebook-domain-verification"
          content="rqzhaxm4c76o8eja0seova4eqlq9ki"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black bg-bitcoin text-center text-white">
        <div className="container flex flex-col items-center justify-center px-4 py-16 ">
          <Header>
            <Title />
            <Date />
          </Header>

          <Content>
            <Countdown />
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
