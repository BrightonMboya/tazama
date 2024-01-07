import type { AppProps, AppType } from "next/app";
import Layout from "~/ui/Layout";

import "~/styles/globals.css";




const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
