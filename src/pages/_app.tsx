import TagManager from "react-gtm-module";
import { useEffect } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "~/styles/fonts.css";

const tagManagerArgs = {
  gtmId: "G-ZT5QKKRCES",
};

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
