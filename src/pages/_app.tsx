import TagManager from "react-gtm-module";

import { useEffect } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "~/styles/fonts.css";
import Script from "next/script";
import Pixel from "~/utils/pixel";

const GOOGLE_TAG_MANAGER_ID = "G-ZT5QKKRCES";
const FACEBOOK_PIXEL_ID = "987999309052841";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({
      gtmId: GOOGLE_TAG_MANAGER_ID,
    });

    Pixel.pageview();
  }, []);

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${FACEBOOK_PIXEL_ID});
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
