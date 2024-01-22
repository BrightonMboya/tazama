import type { AppProps, AppType } from "next/app";
import Layout from "~/components/ui/Layout";
import { Libre_Franklin, Raleway, Poppins, Mate } from "next/font/google";

import "~/styles/globals.css";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-franklin",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
});

const mate = Mate({
  subsets: ["latin"],
  variable: "--font-mate",
  weight: ["400"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main
        className={`${franklin.variable} ${raleway.variable} ${poppins.variable} ${mate.variable}`}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
