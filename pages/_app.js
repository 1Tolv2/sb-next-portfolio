
import { storyblokInit, apiPlugin } from "@storyblok/react";

const components = {}
 
storyblokInit({
  accessToken: process.env.NEXT_APP_SB_TOKEN,
  use: [apiPlugin]
});
 
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;